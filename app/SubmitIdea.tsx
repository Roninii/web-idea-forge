interface SentenceSimilarityQuery {
  inputs: {
    source_sentence: string;
    sentences: string[];
  };
}

const query = async (data: SentenceSimilarityQuery) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    console.error(response);
    return;
  }

  const result = await response.json();
  return result;
};
