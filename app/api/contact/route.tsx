import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendMail } from "@/app/_utils";
import { contactInfoType } from "@/app/_schemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message }: contactInfoType = body.data;

    await sendMail({
      from: name,
      subject: "New Inquiry Received via Portfolio.",
      html: `
            <h5>Hello Haruna,</h5>
            <p>${message}</p>

            <br />

            <p>Thank you.</p>
            <p>
              ${name} <br />
              ${email} <br />
              ${phone}
            </p>`,
    });

    return NextResponse.json(
      { message: "Email has been sent successfully." },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
