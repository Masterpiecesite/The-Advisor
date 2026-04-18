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
