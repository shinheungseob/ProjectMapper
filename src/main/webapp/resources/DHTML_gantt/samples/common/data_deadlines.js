var taskData = {
  data: [
    {
      id: 1,
      start_date: "2025-04-04 00:00:00",
      duration: 15,
      text: "Project #1",
      progress: 0.1,
      parent: 0,
      deadline: "2025-04-18 00:00:00",
      open: true,
      type: "project",
      end_date: "2025-04-19 00:00:00",
    },
    {
      id: 2,
      start_date: "2025-04-04 00:00:00",
      duration: 2,
      text: "Task #1",
      progress: 0.5,
      parent: 1,
      deadline: "",
      open: true,
      end_date: "2025-04-06 00:00:00",
    },
    {
      id: 5,
      start_date: "2025-04-05 00:00:00",
      duration: 3,
      text: "Task #1.1",
      progress: 0.34,
      parent: 2,
      deadline: "2025-04-07 00:00:00",
      open: true,
      end_date: "2025-04-08 00:00:00",
    },
    {
      id: 6,
      start_date: "2025-04-09 00:00:00",
      duration: 4,
      text: "Task #1.2",
      progress: 0.5,
      parent: 2,
      deadline: "",
      open: true,
      end_date: "2025-04-13 00:00:00",
    },
    {
      id: 3,
      start_date: "2025-04-06 00:00:00",
      duration: 3,
      text: "Task #2",
      progress: 0.7,
      parent: 1,
      deadline: "2025-04-12 00:00:00",
      open: true,
      end_date: "2025-04-09 00:00:00",
    },
    {
      id: 7,
      start_date: "2025-04-11 00:00:00",
      duration: 5,
      text: "Task #2.1",
      progress: 0.2,
      parent: 3,
      deadline: "",
      open: true,
      end_date: "2025-04-16 00:00:00",
    },
    {
      id: 8,
      start_date: "2025-04-05 00:00:00",
      duration: 4,
      text: "Task #2.2",
      progress: 0.9,
      parent: 3,
      deadline: "2025-04-09 00:00:00",
      open: true,
      end_date: "2025-04-09 00:00:00",
    },
    { id: 4, start_date: "2025-04-09 00:00:00", duration: 4, text: "Task #3", progress: 0, parent: 1, deadline: "", open: true, end_date: "2025-04-13 00:00:00" },
    {
      id: 9,
      start_date: "2025-04-09 00:00:00",
      duration: 5,
      text: "Task #3.1",
      progress: 1,
      parent: 4,
      deadline: "",
      open: true,
      end_date: "2025-04-14 00:00:00",
    },
    {
      id: 10,
      start_date: "2025-04-12 00:00:00",
      duration: 3,
      text: "Task #3.2",
      progress: 0,
      parent: 4,
      deadline: "2025-04-13 00:00:00",
      open: true,
      end_date: "2025-04-15 00:00:00",
    },
    {
      id: 11,
      start_date: "2025-04-15 00:00:00",
      duration: 4,
      text: "Task #3.3",
      progress: 0.33,
      parent: 4,
      deadline: "2025-04-12 00:00:00",
      open: true,
      end_date: "2025-04-19 00:00:00",
    },
    {
      id: 12,
      start_date: "2025-04-02 00:00:00",
      duration: 16,
      text: "Project #2",
      progress: 0,
      parent: 0,
      deadline: "2025-04-19 00:00:00",
      open: true,
      type: "project",
      end_date: "2025-04-18 00:00:00",
    },
    {
      id: 13,
      start_date: "2025-04-02 00:00:00",
      duration: 10,
      text: "Task #1",
      progress: 0.2,
      parent: 12,
      deadline: "2025-04-14 00:00:00",
      open: true,
      end_date: "2025-04-12 00:00:00",
    },
    {
      id: 14,
      start_date: "2025-04-03 00:00:00",
      duration: 2,
      text: "Task #2",
      progress: 0.9,
      parent: 12,
      deadline: "2025-04-15 00:00:00",
      render: "split",
      end_date: "2025-04-05 00:00:00",
    },
    {
      id: 18,
      start_date: "2025-04-06 00:00:00",
      duration: 1,
      text: "Task #2.1",
      progress: 0.3,
      parent: 14,
      deadline: "2025-04-16 00:00:00",
      open: true,
      end_date: "2025-04-07 00:00:00",
    },
    {
      id: 19,
      start_date: "2025-04-09 00:00:00",
      duration: 2,
      text: "Task #2.2",
      progress: 0.6,
      parent: 14,
      deadline: "2025-04-11 00:00:00",
      open: true,
      end_date: "2025-04-11 00:00:00",
    },
    {
      id: 20,
      start_date: "2025-04-12 00:00:00",
      duration: 2,
      text: "Task #2.3",
      progress: 0.5,
      parent: 14,
      deadline: "",
      open: true,
      end_date: "2025-04-14 00:00:00",
    },
    {
      id: 21,
      start_date: "2025-04-17 00:00:00",
      duration: 1,
      text: "Task #2.4",
      progress: 0.7,
      parent: 14,
      deadline: "",
      open: true,
      end_date: "2025-04-18 00:00:00",
    },
    {
      id: 15,
      start_date: "2025-04-05 00:00:00",
      duration: 3,
      text: "Task #3",
      progress: 0.6,
      parent: 12,
      deadline: "2025-04-09 00:00:00",
      open: true,
      end_date: "2025-04-08 00:00:00",
    },
    {
      id: 16,
      start_date: "2025-04-04 00:00:00",
      duration: 1,
      text: "Task #4",
      progress: 0.2,
      parent: 12,
      deadline: "2025-04-03 00:00:00",
      render: "split",
      end_date: "2025-04-05 00:00:00",
    },
    {
      id: 22,
      start_date: "2025-04-06 00:00:00",
      duration: 1,
      text: "Task #4.1",
      progress: 1,
      parent: 16,
      deadline: "2025-04-13 00:00:00",
      open: true,
      end_date: "2025-04-07 00:00:00",
    },
    {
      id: 23,
      start_date: "2025-04-08 00:00:00",
      duration: 2,
      text: "Task #4.2",
      progress: 1,
      parent: 16,
      deadline: "2025-04-10 00:00:00",
      open: true,
      end_date: "2025-04-10 00:00:00",
    },
    {
      id: 24,
      start_date: "2025-04-12 00:00:00",
      duration: 2,
      text: "Task #4.3",
      progress: 0,
      parent: 16,
      deadline: "2025-04-15 00:00:00",
      open: true,
      end_date: "2025-04-14 00:00:00",
    },
    {
      id: 17,
      start_date: "2025-04-16 00:00:00",
      duration: 2,
      text: "Task #5",
      progress: 0.5,
      parent: 12,
      deadline: "2025-04-14 00:00:00",
      open: true,
      end_date: "2025-04-18 00:00:00",
    },
  ],
  links: [],
};
