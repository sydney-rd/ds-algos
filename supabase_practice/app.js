document.addEventListener("DOMContentLoaded", async () => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Fetch and display existing messages
  const { data: messages, error } = await supabase
    .from("public.messages")
    .select("text");

  if (error) {
    console.error("Error fetching messages:", error.message);
  } else {
    displayMessages(messages);
  }
  // Handle form submission to add a new message
  const form = document.getElementById("messageForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const messageInput = document.getElementById("message");
    const messageText = messageInput.value;

    // Add the new message to the database
    const { data: newMessage, error: addError } = await supabase
      .from("messages")
      .insert([{ text: messageText }]);

    if (addError) {
      console.error("Error adding message:", addError.message);
    } else {
      // Clear the input field
      messageInput.value = "";
    }
  });

  // Function to create Supabase client
  function createClient(url, key) {
    return (window.supabase = supabase.createClient(url, key));
  }
});
