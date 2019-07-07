import React, { Component } from "react";
import { Formik, Field } from "formik";
import { TextField, Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { createValidationSchema } from "./validations";

class GenericForm extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  getInitialValues = () => {
    const initialValues = {};
    const { form } = this.props;
    form.fields.map(field => (initialValues[field.name] = field.value));
    return initialValues;
  };

  renderTextField = formikProps => {
    const { touched, errors } = formikProps;
    const { form } = this.props;
    return form.fields.map(field => (
      <Field
        name={field.name}
        key={field.name}
        render={props => {
          return (
            <TextField
              {...field}
              {...props.field}
              error={touched[field.name] && Boolean(errors[field.name])}
              helperText={touched[field.name] ? errors[field.name] : ""}
              required={field.required}
              fullWidth
              variant="outlined"
              style={{ marginBottom: "1em" }}
            />
          );
        }}
      />
    ));
  };

  render() {
    const { onSubmit } = this.props;
    const initialValues = this.getInitialValues();
    return (
      <div>
        <Typography variant="h5" style={{ marginBottom: "1em" }}>
          {this.props.form.name}
        </Typography>
        <Formik
          validationSchema={createValidationSchema(this.props.form)}
          onSubmit={onSubmit}
          initialValues={initialValues}
          render={form => {
            return (
              <form onSubmit={form.handleSubmit}>
                {this.renderTextField(form)}
                <Button type="submit" variant="contained" color="primary">
                  {this.props.form.submitButtonText}
                </Button>
              </form>
            );
          }}
        />
      </div>
    );
  }
}

export default GenericForm;
