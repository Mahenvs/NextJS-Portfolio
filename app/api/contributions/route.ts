import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const year = searchParams.get("year");

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          query {
            user(login: "mahenvs") {
              contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
        `,
      }),
    });

    const result = await response.json();
    const contributions =
      result?.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions || 0;

    return NextResponse.json({ contributions });
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return NextResponse.json(
      { error: "Failed to fetch contributions" },
      { status: 500 }
    );
  }
}
