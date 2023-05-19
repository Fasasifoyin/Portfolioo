export const registerOptions = {
    firstName: {
      required: "Firstname is required",
      maxLength: {
        value: 20,
        message: "Firstname must be less than 20 characters",
      },
    },
    lastName: {
      required: "Lastname is required",
      maxLength: {
        value: 20,
        message: "Lastname must be less than 20 characters",
      },
    },
    email: {
      required: "Email is required",
      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    },
    message: {
      required: "Send a message",
    },
  };
  