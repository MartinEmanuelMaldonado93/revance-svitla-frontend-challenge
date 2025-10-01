"use strict";
import { monthNames, dayNames, tasksFromDB } from "./resources.js";
import { happyIconSVG, neutralIconSVG } from "./resources.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
	updateDate();

	const taskList = document.querySelector(".task-list");

	tasksFromDB.forEach((task) => {
		taskList.appendChild(createListItem(task));
	});

	const form = document.querySelector(".add-task-form");

	form.addEventListener("submit", addTask);
	taskList.addEventListener("click", toggleTaskStatus);
}

function addTask(event) {
	event.preventDefault();
	const taskInput = document.querySelector(".add-task-form input");
	const taskList = document.querySelector(".task-list");

	const taskText = taskInput.value.trim();
	if (taskText === "") return;

	const newTask = {
		text: taskText,
		completed: false,
	};
	const taskItem = createListItem(newTask);
	taskList.appendChild(taskItem);

	taskInput.value = "";
	taskInput.focus();
}

function createListItem(task) {
	const taskItem = document.createElement("li");
	taskItem.classList.add("task-item");

	const deleteBtn = document.createElement("span");
	deleteBtn.classList.add("delete-btn");
	deleteBtn.textContent = "x";
	deleteBtn.title = "Delete task";
	// deleteBtn.style.opacity = "0";
	deleteBtn.addEventListener("click", (e) => {
		e.stopPropagation(); // to not trigger toggleTaskStatus 
		taskItem.remove();
	});

	taskItem.innerHTML = `
	<span>${task.text}</span>
	${task.completed ? happyIconSVG : neutralIconSVG}
	`;
	taskItem.prepend(deleteBtn);
    
	task.completed && taskItem.classList.add("completed");
	return taskItem;
}

function toggleTaskStatus(event) {
	const taskItem = event.target.closest(".task-item");
	if (!taskItem) return;

	taskItem.classList.toggle("completed");

	const currentIcon = taskItem.querySelector(".status-icon");

	if (taskItem.classList.contains("completed")) {
		currentIcon.outerHTML = happyIconSVG;
	} else {
		currentIcon.outerHTML = neutralIconSVG;
	}
}

function updateDate() {
	const monthElement = document.querySelector(".app-header h1");
	const dateElement = document.querySelector(".app-header p");

	const currentDate = new Date();

	const month = monthNames[currentDate.getMonth()]; // 0 -11
	const dayOfWeek = dayNames[currentDate.getDay()];
	const dayOfMonth = currentDate.getDate();

	if (monthElement && dateElement) {
		monthElement.textContent = month;

		const formatedDay = `${dayOfWeek}, ${month} ${dayOfMonth}`;
		dateElement.textContent = formatedDay;
	}
}
