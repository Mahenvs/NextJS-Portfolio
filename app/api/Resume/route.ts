// pages/api/download-file.js

import { NextResponse } from "next/server";
export async function GET(params: any) {
  try {

    const fileId = process.env.FILE_ID;
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch file.");
    }

    const fileStream = response.body;
    const headers = new Headers({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=MaheResume.pdf"
    });

    return new NextResponse(fileStream, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to download file" }),
      { status: 500 }
    );
  }
}