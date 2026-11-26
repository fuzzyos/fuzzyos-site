"use client";

import { useState } from "react";
import { Code, Flex } from "@radix-ui/themes";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";

export default function CopyCode({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Code size="4" style={{ padding: "12px 24px", display: "block", cursor: "pointer" }} onClick={handleCopy}>
      <Flex align="center" gap="3">
        {text}
        {copied ? (
          <CheckIcon width="16" height="16" style={{ color: "var(--accent-9)" }} />
        ) : (
          <CopyIcon width="16" height="16" style={{ opacity: 0.6 }} />
        )}
      </Flex>
    </Code>
  );
}
