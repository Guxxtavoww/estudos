import { useState } from "react";

type CopiedValue = string | null;
type CopyFunction = (text: string) => Promise<void>;

interface IHookResponse {
  copiedText: CopiedValue;
  handleCopy: CopyFunction;
}

function useCopyToClipboard(): IHookResponse {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const handleCopy: CopyFunction = async (text) => {
    if (!navigator.clipboard) {
      console.warn("Area de transferencia nao existente");

      return;
    }

    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err);
      setCopiedText(null);
    }
  };

  return { copiedText, handleCopy };
}

export default useCopyToClipboard;

// Usage -> <button onClick={() => handleCopy('Texto')}>Tantofaz</button> && <p>{copiedText ?? 'Não copio nada!'}</p>
