import * as Yup from "yup";

export const createValidationSchema = form => {
  const validations = {};
  for (let field of form.fields) {
    validations[field.name] = getFieldType(field);
    for (let validation of field.validations) {
      validations[field.name] = getValidation(
        validations[field.name],
        validation
      );
    }
  }
  return Yup.object().shape(validations);
};

const getFieldType = field => {
  switch (field.valuetype) {
    case "string":
      return Yup.string();

    case "number":
      return Yup.number();

    default:
      return Yup.string();
  }
};

const getValidation = (currentValidation, validation) => {
  switch (validation.type) {
    case "required":
      return currentValidation.required(validation.err);

    case "minLength":
      return currentValidation.min(validation.value, validation.err);

    case "maxLength":
      return currentValidation.max(validation.value, validation.err);

    case "email":
      return currentValidation.email(validation.err);

    case "match":
      return currentValidation.matches(validation.value, {
        message: validation.err
      });

    case "ref":
      return currentValidation.oneOf([Yup.ref(validation.ref)], validation.err);

    case "integer":
      return currentValidation.integer(validation.err);

    case "min":
      return currentValidation.moreThan(validation.value, validation.err);

    case "max":
      return currentValidation.lessThan(validation.value, validation.err);

    default:
      return currentValidation;
  }
};
