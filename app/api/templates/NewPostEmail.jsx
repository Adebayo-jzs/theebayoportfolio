import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Button,
  Preview,
  Hr,
  Tailwind,
  Font,
  Link,
  Row,
  Column,
} from "@react-email/components";

const formatDate = (dateString) => {
  if (!dateString) return { date: "", time: "" };
  const date = new Date(dateString);
  return {
    date: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
};

const getPreviewText = (content, excerpt) => {
  const textSource = content || excerpt || "";
  if (!textSource) return "No content preview available";
  
  // Strip HTML tags
  const plainText = textSource.replace(/<[^>]*>?/gm, "")
                             .replace(/&nbsp;/g, " ")
                             .trim();
                             
  if (!plainText) return "No content preview available";
  
  return plainText.slice(0, 300) + (plainText.length > 300 ? "..." : "");
};

export const NewPostEmail = ({
  title = "New Blog Post",
  excerpt = "",
  slug = "",
  created_at = "",
  category = "Blog",
  read_time = "5 min read",
  content = "",
}) => {
  const postUrl = `https://blog.theebayo.name.ng/posts/${slug}`;
  const { date, time } = formatDate(created_at);
  const previewText = getPreviewText(content, excerpt);

  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                background: "#050505",
                card: "#171a20",
                primary: "#00e6ff",
                text: "#ffffff",
                muted: "#9ca3af",
                border: "#2d323c",
              },
              fontFamily: {
                 sans: ['Outfit', 'sans-serif'],
                 serif: ['Merriweather', 'Georgia', 'serif'],
                 mono: ['monospace'],
              }
            },
          },
        }}
      >
        <Head>
          <Font
            fontFamily="Outfit"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4tc.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Font
            fontFamily="Merriweather"
            fallbackFontFamily="serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52_wfzX836.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Font
            fontFamily="Merriweather"
            fallbackFontFamily="serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/merriweather/v30/u-4l0qyriQwlOrhSvowK_l5-eR7NWMf8.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="italic"
          />
        </Head>
        <Preview>{title} - New post on Theebayo Blog</Preview>
        <Body className="bg-background font-sans text-text">
          <Container className="mx-auto my-8 py-6 px-3 max-w-2xl">
            
            {/* Minimal Header / Meta */}
            <Section className="mb-6 border-l-2 border-primary pl-4">
              <Text className="text-muted text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] m-0">
                <span className="text-white">{date}</span>
                <span className="mx-2 text-border">/</span>
                <span className="text-primary font-bold">{category}</span>
                <span className="mx-2 text-border">/</span>
                <span>{read_time}</span>
              </Text>
            </Section>

            {/* Title */}
            <Heading className="text-4xl sm:text-5xl font-bold text-white uppercase leading-[0.9] tracking-tighter m-0 mb-6">
              {title}
            </Heading>

            {/* Subtitle / Excerpt (Italic Serif) */}
            {excerpt && (
                <Text className="text-xl text-white font-serif italic mb-8 border-l border-border pl-4 opacity-80">
                  {excerpt}
                </Text>
            )}

            <Hr className="border-border my-8 opacity-30" />

            {/* Main Content Preview (Serif) */}
            <Text className="text-[#a1a1aa] font-serif text-lg leading-relaxed m-0 mb-8 whitespace-pre-wrap">
              {previewText}
            </Text>

            {/* CTA Button */}
            <Section className="">
                <Row>
                    <Column>
                        <Button
                          href={postUrl}
                          className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-black hover:border-transparent font-mono uppercase text-xs tracking-widest px-8 py-3 transition-all rounded-none"
                        >
                          Read Full Article
                        </Button>
                    </Column>
                    <Column align="right">
                         <div className="flex gap-4">
                            <Link href="https://twitter.com/theebayo" className="text-muted text-lg no-underline">𝕏</Link>
                         </div>
                    </Column>
                </Row>
            </Section>

            {/* Footer */}
            <Section className="mt-12 pt-8 border-t border-border/20">
              <Text className="text-muted/40 text-[10px] uppercase tracking-widest text-center m-0">
                © {new Date().getFullYear()} Theebayo Portfolio
              </Text>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewPostEmail;
