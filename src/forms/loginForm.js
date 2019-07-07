const loginForm = {
    name: "Login Form",
    fields: [
      {
        name: "username",
        label: "Username",
        type: "text",
        fieldtype: "textfield",
        value: "",
        required: true,
        valuetype: "string",
        validations: [
          {
            type: "required",
            err: "This is a required field"
          },
          {
            type: "minLength",
            value: 8,
            err: "Username must contains atleast 8 characters"
          },
          {
            type: "maxLength",
            value: 16,
            err: "Username cannot contains more than 16 characters"
          }
        ]
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        fieldtype: "textfield",
        value: "",
        required: true,
        valuetype: "string",
        validations: [
          {
            type: "required",
            err: "This is a required field"
          },
          {
            type: "minLength",
            value: 8,
            err: "Password must contains atleast 8 characters"
          },
          {
            type: "maxLength",
            value: 16,
            err: "Password cannot contains more than 16 characters"
          }
        ]
      }
    ],
    submitButtonText: "Login"
  };
  
  export default loginForm;
  