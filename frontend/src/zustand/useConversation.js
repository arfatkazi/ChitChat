import { create } from "zustand"
import { persist } from "zustand/middleware"

const useConversation = create(
	persist(
		(set) => ({
			selectedConversation: null,
			setSelectedConversation: (selectedConversation) =>
				set({ selectedConversation }),

			messages: [],
			setMessages: (messages) => set({ messages }),

			// Additional actions
			addMessage: (message) =>
				set((state) => ({ messages: [...state.messages, message] })),
			clearMessages: () => set({ messages: [] }),
		}),
		{
			name: "conversation-storage", // unique name
			getStorage: () => localStorage, // default is localStorage
		}
	)
)

export default useConversation
