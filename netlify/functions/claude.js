exports.handler = async function(event) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "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"
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
