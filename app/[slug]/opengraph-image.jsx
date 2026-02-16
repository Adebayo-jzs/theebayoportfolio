/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { supabase } from "@/utils/supabase";

export const runtime = "edge";
export const alt = "Theebayo Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const formatDate = (string) => {
    return new Date(string).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
export default async function Image({ params }) {
  const { slug } = await params;

  // Retrieve data from Supabase
  const { data: post } = await supabase
    .from("posts")
    .select("title, category, created_at, read_time")
    .eq("slug", slug)
    .single();

  if (!post) {
      return new ImageResponse(
          (
              <div
                  style={{
                      fontSize: 48,
                      background: "#050505",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                  }}
              >
                  Theebayo Blog
              </div>
          ),
          { ...size }
      );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            zIndex: 0,
          }}
        />
        
        {/* Content Wrapper */}
        <div style={{ 
            zIndex: 1, 
            display: "flex", 
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: "80px",
            justifyContent: "center",
            alignItems: "flex-start",
        }}>
            <div
                style={{
                    display: "flex",
                    marginBottom: "20px",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                }}
            >
                Theebayo Insights / <span style={{color: "#00e6ff" ,marginLeft:"2px" }}> {post.category || "Article"}</span>
            </div>
            
            <div
            style={{
                fontSize: "80px",
                fontWeight: 900,
                lineHeight: 0.9,
                textTransform: "uppercase",
                marginBottom: "60px",
                color: "white",
                maxWidth: "1000px",
                textShadow: "0 0 40px rgba(0,0,0,0.5)",
            }}
            >
            {post.title}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* <img 
                    src="https://theebayo.name.ng/avatar.jpg" 
                    width="60" 
                    height="60" 
                    style={{ borderRadius: "50%", marginRight: "20px", border: "2px solid rgba(255,255,255,0.2)" }} 
                /> */}
                <div style={{ fontSize: "30px", fontWeight: "bold", color: "#00e6ff" }}>Adebayo Adedeji</div>
            </div>
            <div
            style={{
                display: "flex",
                marginTop: "20px",
                fontSize: "24px",
                fontWeight: "bold",
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
            }}
            >
            {formatDate(post.created_at)} • {post.read_time}
            </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
