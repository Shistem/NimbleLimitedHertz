import axios from 'axios';
import { API_URL, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_REDIRECT_URI, DEEPSEEK_API_TOKEN } from '../config';

export async function sendMessage(messages) {
  try {
    const startTime = performance.now();
    const response = await axios.post(API_URL, {
      messages: [
        {
          content: "You are zero two.",
          role: "system"
        },
        ...messages
      ],
      model: 'deepseek-chat',
      frequency_penalty: 0,
      max_tokens: 2048,
      presence_penalty: 0,
      stop: null,
      stream: false,
      temperature: 1,
      top_p: 1,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_TOKEN}`,
      },
    });
    const endTime = performance.now();
    const totalTokens = response.data.choices[0].text.split(' ').length;
    const tokenGenerationTime = (endTime - startTime) / 1000;
    const tokenGenerationRate = totalTokens / tokenGenerationTime;

    const assistantMessage = {
      content: response.data.choices[0].text,
      role: 'assistant',
    };

    return {
      tokenGenerationRate,
      totalTime: tokenGenerationTime,
      firstTokenTime: tokenGenerationTime / totalTokens,
      assistantMessage,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function loginWithDiscord() {
  try {
    const response = await axios.get('/api/discord/login');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}