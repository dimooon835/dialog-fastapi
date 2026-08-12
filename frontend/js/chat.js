const elements = {
    sidebar: document.getElementById("sidebar"),
    sidebarBackdrop: document.getElementById("sidebarBackdrop"),
    sidebarClose: document.getElementById("sidebarClose"),
    newChatButton: document.getElementById("newChatButton"),
    chatSearch: document.getElementById("chatSearch"),
    chatHistory: document.getElementById("chatHistory"),
    emptyHistory: document.getElementById("emptyHistory"),
    profileAvatar: document.getElementById("profileAvatar"),
    profileName: document.getElementById("profileName"),
    profileEmail: document.getElementById("profileEmail"),
    logoutButton: document.getElementById("logoutButton"),
    sidebarOpen: document.getElementById("sidebarOpen"),
    chatTitle: document.getElementById("chatTitle"),
    saveStatus: document.getElementById("saveStatus"),
    deleteChatButton: document.getElementById("deleteChatButton"),
    chatViewport: document.getElementById("chatViewport"),
    emptyState: document.getElementById("emptyState"),
    messages: document.getElementById("messages"),
    globalError: document.getElementById("globalError"),
    chatForm: document.getElementById("chatForm"),
    messageInput: document.getElementById("messageInput"),
    modelSelect: document.getElementById("modelSelect"),
    charCount: document.getElementById("charCount"),
    sendButton: document.getElementById("sendButton"),
};

const state = {
    user: null, 
    chats: [],
    models: [],
    currentChatId: null,
    sending: false
};

function showError(message) {
    elements.globalError.textContent = message;
    elements.globalError.classList.remove("hidden")
}

function cleanError(message) {
    elements.globalError.classList.add("hidden")
    elements.globalError.textContent = "";
}

<<<<<<< HEAD
function setEmptyState(isEmpty){
=======
function setEmptyState(isEmpty) {
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
    elements.emptyState.classList.toggle("hidden", !isEmpty);
    elements.messages.classList.toggle("hidden", isEmpty);
}

function renderChats() {
    const query = elements.chatSearch.value.trim().toLowerCase();
    const visibleChat = state.chats.filter(chat => chat.title.toLowerCase().includes(query))

    elements.chatHistory.replaceChildren();
    elements.emptyHistory.classList.toggle("hidden", visibleChats.length > 0);

    visibleChats.forEach(chat => {
        const button = document.createElement("button");
<<<<<<< HEAD
        const active  =chat.id === state.currentChatId;
=======
        const active = chat.id === state.currentChatId;
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
        button.type = "button";
        button.className = active
            ? "flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-left font-medium text-ink shadow-sm"
            : "flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-left font-medium text-stone-600"

        button.dataset.chatId = chat.id;

        const icon = document.createElement("span");
        icon.className = "size-1.5 shrink-0 rounded-full bg-stone-400";

        const label = document.createElement("span");
        label.className = "truncate";
        label.textContent = chat.title;

        button.append(icon, label);
        button.addEventListener("click", () => loadChat(chat.id));
        elements.chatHistory.appendChild(button);
    })
};

function renderModels() {
    elements.modelSelect.replaceChildren();
<<<<<<< HEAD
    if(!state.models.length){
        const option = document.createElement("option");
        option.textContent = "Модели недоступны"
        elements.modelSelect.appendChild("option");
=======
    if(!state.models.length) {
        const option = document.createElement("option");
        option.textContent = "Модели недоступны";
        elements.modelSelect.appendChild(option);
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
        elements.modelSelect.disabled = true;
        updateComposer();
        return;
    }

    state.models.forEach(model => {
        const option = document.createElement("option");
        option.value = model.id;
<<<<<<< HEAD
        option.textContent = model.name || model.id
        elements.modelSelect.appendChild("option");
    });

    elements.modelSelect.disabled  = false;
=======
        option.textContent = model.name || model.id;
        elements.modelSelect.appendChild(option);
    });

    elements.modelSelect.disabled = false;
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
    updateComposer();
}

async function loadChat(chatId) {
<<<<<<< HEAD
    try{
=======
    try {
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
        const detail = await api(`/api/chats/${chatId}`);
        state.currentChatId = chatId;
        elements.chatTitle.textContent = detail.chat.title;
        elements.deleteChatButton.classList.remove("hidden");

        renderMessages();
        renderChats();
<<<<<<< HEAD

    } catch(e) {
        showError(e.message);
    }
}
=======
    } catch(e) {
        showError(e.message);
    }
};
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27

function createMessageElement(message) {
    const isUser = message.role === "user";
    const article = document.createAttribute("article");
    article.className = isUser
        ? "flex items-center justify-end"
        : "flex items-start gap-3"

    const content = document.createElement("div");
    content.className = isUser
<<<<<<< HEAD
        ? "max-w-[85%] whitespace-pre-wrap rounded-2xl border-br-md bg-stone-100 px-4 py-3 text-sm"
=======
        ? "max-w-[85%] whitespace-pre-wrap rounded-2x1 border-br-md bg-stone-100 px-4 py-3 text-sm"
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
        : "min-w-0 max-w-[calc(100%_-_2.5rem)] whitespace-pre-wrap pt-0.5 text-sm text-stone-800"

    content.textContent = message.content;
    article.appendChild(content)
    return article
<<<<<<< HEAD
}

async function renderMessages(message) {
    elements.messages.replaceChildren(...messages.map(createMessageElement))

    scrollToBottom()
}

function startNewChat(){
=======
};

async function renderMessages(messages) {
    elements.messages.replaceChildren(...messages.map(createMessageElement))

    scrollToBottom();
}

function startNewChat() {
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
    state.currentChatId = null;
    elements.chatTitle.textContent = "Новый чат";
    elements.deleteChatButton.classList.add("hidden");
    elements.messages.replaceChildren();
    setEmptyState(true);
    renderChats();
    elements.messageInput.focus();
}

<<<<<<< HEAD
async function createChat(){
=======
async function createChat() {
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
    const chat = await api("/api/chats", {
        method: "POST",
        body: JSON.stringify({title: "Новый чат"})
    });

    state.chats.unshift(chat);
    state.currentChatId = chat.id;
    elements.deleteChatButton.classList.remove("hidden");
    return chat;
}

async function refreshChats() {
    state.chats = await api("/api/chats");
    renderChats();
}

<<<<<<< HEAD
function updateComposer(){
    const lenght  = elements.messageInput.value.lenght;
    elements.sendButton.disabled = state.sending
        || !elements.messageInput.value.trim()
        || elements.modelSelect.disabled;
    
=======
function updateComposer() {
    const length = elements.messageInput.value.length;
    elements.sendButton.disabled = state.sending
        || !elements.messageInput.value.trim()
        || elements.modelSelect.disabled;

>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
    elements.messageInput.style.height = "auto";
    elements.messageInput.style.height = `${Math.min(elements.messageInput.scrollHeight, 176)}px`
}

<<<<<<< HEAD
async function sendMessage(content){
=======
async function sendMessage(content) {
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
    if(state.sending || !content.trim() || elements.modelSelect.disabled)
        return;

    cleanError();
    state.sending = true;
    elements.saveStatus.textContent = "Отправка..."
    updateComposer();

<<<<<<< HEAD
    try{
        if (!state.currentChatId) await createChat();
=======
    try {
        if(!state.currentChatId) await createChat();
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
        setEmptyState(false);
        elements.messages.appendChild(
            createMessageElement({role: "user", content})
        );
<<<<<<< HEAD
        scrollToBottom()

        const result = await api(`/api/chats/${state.currentChatId}/messages`, {
=======

        scrollToBottom()

        const result = await api(`/api/chats/${state.currentChatId}/messages`, {
            method: "POST",
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
            body: JSON.stringify({
                content,
                model_id: elements.modelSelect.value
            })
        });

<<<<<<< HEAD
        elements.messages.appendChild(
            createMessageElement(result.assistant_message)
        );
        elements.chatTitle.textContent = result.chat.title;
        await refreshChats();
        scrollToBottom();
    }

    catch(e){
        showError(e.message);
    } finally{
=======
        elements.messages.appendChild(createMessageElement(result.assistant_message));
        elements.chatTitle.textContent = result.chat.title;
        await refreshChats();
        scrollToBottom();
    } catch(e) {
        showError(e.message);
    } finally {
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
        state.sending = false;
        elements.saveStatus.textContent = "Сохранено";
        updateComposer();
        elements.messageInput.focus();
    }
}

async function initialize() {
<<<<<<< HEAD
    try{
=======
    try {
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
        const [user, chats] = await Promise.all([
            api("/api/auth/me"), api("/api/chats")
        ]);

        state.user = user;
        state.chats = chats;
        elements.profileName.textContent = user.name;
        elements.profileEmail.textContent = user.email;

<<<<<<< HEAD
        renderChats();

        try{
            state.models = await api("/api/models");
            renderModels();
        } catch(e){
=======
        renderChats()

        try {
            state.models = await api("/api/models");
            renderModels();
        } catch(e) {
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
            showError(e.message);
            renderModels();
        }
    } catch(e) {
        showError(e.message);
        elements.modelSelect.replaceChildren();
        const option = document.createElement("option");
<<<<<<< HEAD
        option.textContent = "Модели недоступны"
=======
        option.textContent = "Модели недоступны";
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
        elements.modelSelect.appendChild(option);
    }
}

elements.chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const content = elements.messageInput.value.trim();
<<<<<<< HEAD
    if (!content) return;
=======
    if(!content) return;
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
    elements.messageInput.value = "";
    updateComposer();
    sendMessage(content);
});

elements.messageInput.addEventListener("input", updateComposer);
<<<<<<< HEAD
elements.messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
=======
elements.messageInput.addEventListener("keyboard", (e) => {
    if(e.key === "Enter" && !e.shiftKey) {
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
        e.preventDefault();
        elements.chatForm.requestSubmit();
    }
});
<<<<<<< HEAD
elements.chatSearch.addEventListener("input", renderChats);
elements.newChatButton.addEventListener("click", startNewChat);

elements.deleteChatButton.addEventListener("click",  async(e) => {
    if (!state.currentChatId || !window.confirm("Удалить чат вместе с сообщениями?")) return
    try{
        await api(`api/chats/${state.currentChatId}`, {method: "DELETE"});
=======

elements.chatSearch.addEventListener("input", renderChats);
elements.newChatButton.addEventListener("click", startNewChat);

elements.deleteChatButton.addEventListener("click", async (e) => {
    if(!state.currentChatId || !window.confirm("Удалить чат вместе с сообщениями?")) return

    try {
        await api(`/api/chats/${state.currentChatId}`, {method: "DELETE"});
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
        state.chats = state.chats.filter(chat => chat.id !== state.currentChatId);
        startNewChat()
    } catch (e) {
        showError(e.message);
    }
})

elements.logoutButton.addEventListener("click", async () => {
    await api("/api/auth/logout", {method: "POST"}).catch(() => {});
    window.location.assign("/login.html");
});

updateComposer();
<<<<<<< HEAD
initialize();
=======
initialize()
>>>>>>> ed06cee3770f91b5f19a8df2b5c53d6aa6cc6f27
