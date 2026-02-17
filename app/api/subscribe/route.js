import { supabase } from "@/utils/supabase";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existing } = await supabase
      .from("emails")
      .select("email")
      .eq("email", email)
      .single();

    if (existing) {
      return Response.json(
        { success: true, message: "You are already subscribed!" },
        { status: 200 }
      );
    }

    // Insert new email
    const { error } = await supabase.from("emails").insert([{ email }]);

    if (error) {
      console.error("Supabase error:", error);
      return Response.json(
        { success: false, message: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
