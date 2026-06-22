"use server";

/**
 * Generic Supabase storage utilities for file uploads
 */

interface UploadFileOptions {
  folder?: string;
  maxSizeBytes?: number;
}

interface UploadFileResult {
  success: boolean;
  url?: string;
  error?: string;
}

interface UploadToolImageResult {
  success: boolean;
  url?: string;
  error?: string;
}

/**
 * Upload a file to Supabase storage
 * @param formData - FormData containing the file to upload
 * @param folder - Storage folder name
 * @returns Upload result with public URL or error message
 */
export async function uploadFile(
  formData: FormData,
  folder = "uploads",
  options: UploadFileOptions = {}
): Promise<UploadFileResult> {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "No file provided." };
    }

    const { maxSizeBytes = 5 * 1024 * 1024 } = options;

    if (!file.type.startsWith("image/")) {
      return { success: false, error: "File must be an image." };
    }

    if (file.size > maxSizeBytes) {
      return {
        success: false,
        error: `File size must be less than ${maxSizeBytes / (1024 * 1024)}MB.`,
      };
    }

    const projectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const bucketName = process.env.SUPABASE_BUCKET_NAME;
    const uploadSecret = process.env.USER_CODE;

    if (!projectUrl || !bucketName || !uploadSecret) {
      return { success: false, error: "Supabase configuration missing." };
    }

    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    const filename = `${folder}/${timestamp}-${random}-${file.name}`;

    const uploadUrl = `${projectUrl}/storage/v1/object/${encodeURIComponent(
      bucketName
    )}/${filename
      .split("/")
      .map(encodeURIComponent)
      .join("/")}`;

    const buffer = Buffer.from(await file.arrayBuffer());

    const res = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${uploadSecret}`,
        apikey: uploadSecret,
        "Content-Type": file.type || "application/octet-stream",
        "x-upsert": "true",
      },
      body: buffer,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Supabase upload error:", {
        status: res.status,
        statusText: res.statusText,
        body: errorText,
      });
      return {
        success: false,
        error: `Supabase error (${res.status}): ${errorText || res.statusText}`,
      };
    }

    const encodedFilename = filename
      .split("/")
      .map(encodeURIComponent)
      .join("/");
    const publicUrl = `${projectUrl}/storage/v1/object/public/${encodeURIComponent(
      bucketName
    )}/${encodedFilename}`;

    return {
      success: true,
      url: publicUrl,
    };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to upload file.";
    console.error("Upload file error:", message);
    return {
      success: false,
      error: message,
    };
  }
}

/**
 * Upload a tool image to Supabase storage
 * @param formData - FormData containing the file to upload
 * @returns Upload result with public URL or error message
 */
export async function uploadToolImage(
  formData: FormData
): Promise<UploadToolImageResult> {
  return uploadFile(formData, "tools");
}
