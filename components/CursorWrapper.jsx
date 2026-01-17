"use client";

import {
    Cursor,
    CursorFollow,
    CursorProvider,
} from "@/components/animate-ui/components/animate/cursor";

export default function CursorWrapper({
    children,
}) {
    return (
        <CursorProvider global>
            <Cursor />
            <CursorFollow>
                Developer
            </CursorFollow>
            {children}
        </CursorProvider>
    );
}
