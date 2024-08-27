import fetchProfile from "@/lib/zora/fetchProfile";
import { NextRequest, NextResponse } from "next/server";
import { Address } from "viem";

export async function GET(req: NextRequest, { params }: { params: { address: string } }) {
  try {
    const address = params.address as Address;
    const creator = await fetchProfile(address);
    return NextResponse.json({ creator });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data from Zora API" }, { status: 500 });
  }
}
