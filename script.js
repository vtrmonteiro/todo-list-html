function addTask() {
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    if (input.value.trim() !== "") {
        const item = document.createElement("li");
        item.textContent = input.value;
        list.appendChild(item);
        input.value = "";
    }
}
