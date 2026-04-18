exports.handler = async function(event) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "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",
      "anthropic-version": "2023-06-01"
    },
    body: event.body
  });
  const data = await response.json();
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type" },
    body: JSON.stringify(data)
  };
};
