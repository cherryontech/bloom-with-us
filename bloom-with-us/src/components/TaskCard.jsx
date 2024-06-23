/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button } from "./button";
import { ModalContent, ModalFooter, ModalOverlay } from "./modal";
import skilltasks from "../data/SkillTasks/SkillTasks.json";

export default function TaskCard({ task, displayingSkillIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentSkill = skilltasks[displayingSkillIndex];
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const skillTaskStatus = JSON.parse(
      localStorage.getItem(`skill${currentSkill.id}Status`)
    );
    if (skillTaskStatus) {
      skillTaskStatus.forEach((item) => {
        if (item.taskId == task.id && item.completed == true) {
          setCompleted(true);
        }
      });
    }
  }, [currentSkill, task.id]);

  const donePressed = () => {
    setCompleted(true);
    setIsOpen(false);
    console.log("Hey");
    const skillTaskStatus = JSON.parse(
      localStorage.getItem(`skill${currentSkill.id}Status`)
    );
    if (skillTaskStatus) {
      const newTaskStatus = [];
      skillTaskStatus.forEach((item) => {
        if (item.taskId == task.id) {
          newTaskStatus.push({ taskId: item.id, completed: true });
        } else {
          newTaskStatus.push({ taskId: item.id, completed: item.completed });
        }
      });
      localStorage.setItem(
        `skill${currentSkill.id}Status`,
        JSON.stringify(newTaskStatus)
      );
    } else {
      const taskStatuses = [];
      skilltasks[displayingSkillIndex].taskList.forEach((item) => {
        if (item.id != task.id) {
          taskStatuses.push({ taskId: item.id, completed: false });
        } else {
          taskStatuses.push({ taskId: item.id, completed: true });
        }
      });
      localStorage.setItem(
        `skill${currentSkill.id}Status`,
        JSON.stringify(taskStatuses)
      );
    }
  };

  return (
    <div
      className={
        completed
          ? "bg-bloom-pink flex flex-col text-start border-solid rounded-md border-2 border-bloom-pink mb-2 p-1 relative"
          : "flex flex-col text-start border-solid rounded-md border-2 border-bloom-pink mb-2 p-1 relative"
      }
    >
      <Button
        size="task-modal"
        className="absolute top-0 right-1"
        onPress={() => {
          setIsOpen(true);
        }}
        aria-label="Change task status"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28px"
          height="28px"
          viewBox="0 0 24 24"
        >
          <path d="M20 13.5a1.5 1.5 0 1 1 1.5-1.5 1.502 1.502 0 0 1-1.5 1.5zM13.5 12a1.5 1.5 0 1 0-1.5 1.5 1.502 1.502 0 0 0 1.5-1.5zm-8 0A1.5 1.5 0 1 0 4 13.5 1.502 1.502 0 0 0 5.5 12z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      </Button>
      <ModalOverlay
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        aria-label="Change task status"
      >
        <ModalContent className="fixed top-1/3 left-0 right-0">
          <ModalFooter className="flex">
            <Button
              variant="primaryLightPurple"
              className="ml-auto"
              onPress={donePressed}
            >
              Mark as Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
      <p className="font-bold"> {task.title} </p>
      <p> {task.description} </p>
    </div>
  );
}
