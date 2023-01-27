import { useState } from "react";

type CopiedValue = string | null;
type CopyFunction = (text: string) => Promise<boolean>;

interface IHookResponse {
  copiedText: CopiedValue;
  handleCopy: CopyFunction;
}

function useCopyToClipboard(): IHookResponse {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const handleCopy: CopyFunction = async (text) => {
    if (!navigator.clipboard) {
      console.warn("Area de transferencia nao existente");

      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.log(err);
      setCopiedText(null);
      return false;
    }
  };

  return { copiedText, handleCopy };
}

export default useCopyToClipboard;

// Usage -> <button onClick={() => handleCopy('Texto')}>Tantofaz</button> && <p>{copiedText ?? 'Não copio nada!'}</p>
