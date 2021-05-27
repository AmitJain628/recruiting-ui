import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from '@reach/router';
import { v4 as uuidv4 } from 'uuid';

import Icon from '../Atom/Icon';
import { FormPage, Cover, Button, StyledForm } from './style';
import Input from './input';

export default function AddBook({ actions }) {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title: '',
    author: '',
    description: '',
    image_url: '',
    id: uuidv4(),
  });
  const [errors, setErrors] = useState({});
  const handleChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const validationErrors = {};
    if (values.title.trim().length < 2) {
      validationErrors.title = 'Please provide a title.';
    }
    if (values.author.trim().length < 2) {
      validationErrors.author = 'Please provide an author.';
    }
    if (
      !/^(http(s?):)([\s\w./|-])*\.+(?:jpg|gif|png)+$/.test(values.image_url)
    ) {
      validationErrors.image_url = 'Please provide a cover image.';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }
    actions.addBook(values);
    navigate('/saved');
    return true;
  };

  const converImage = values.image_url ? (
    <img src={values.image_url} alt={values.title} />
  ) : (
    <Icon icon="book-open" />
  );

  return (
    <FormPage pageTitle="Add New Book">
      <StyledForm>
        <Input
          name="title"
          placeholder="Book Title"
          value={values.title}
          handleChange={handleChange}
          error={errors.title}
        />

        <Input
          name="author"
          placeholder="Author Name"
          value={values.author}
          handleChange={handleChange}
          error={errors.author}
        />

        <textarea
          name="description"
          placeholder="Book Description"
          rows="4"
          value={values.description}
          onChange={handleChange}
        />

        <Input
          name="image_url"
          placeholder="Cover Image URL"
          value={values.image_url}
          handleChange={handleChange}
          error={errors.image_url}
        />
        <Button type="button" onClick={handleSubmit}>
          Save
        </Button>
      </StyledForm>
      <Cover>{converImage}</Cover>
    </FormPage>
  );
}

AddBook.propTypes = { actions: PropTypes.objectOf(PropTypes.func) };
