import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import FormControl from '@/components/form/formControl'
import Input from '@/components/form/input'
import Button from '@/components/form/button'
import Textarea from '@/components/form/textarea'
import axios from '@/lib/axios'
import * as Yup from 'yup'
import BookList from '@/components/books/list'

const Form = ({ handleAddBook }) => {
    const bookSchema = Yup.object().shape({
        name: Yup.string()
            .min(4, 'Minimal 4 Characters')
            .max(300, 'Maximal 4 Characters')
            .required('Name is Required'),
        description: Yup.string()
            .min(10, 'Minimal 10 Characters')
            .max(1000, 'Maximal 1000 Characters')
            .required('Description is Required'),
        price: Yup.number().required('Price is Required'),
    })
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
        },
        validationSchema: bookSchema,
        onSubmit: (values, { resetForm }) => {
            handleSubmit(values, resetForm)
        },
    })
    const handleSubmit = async (values, resetForm) => {
        try {
            const { data } = await axios.post(
                'http://localhost:8000/api/books',
                values,
            )
            handleAddBook({ book: data.data })
            resetForm()
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(formik.errors)
    return (
        <div className="w-full mb-2">
            <form onSubmit={formik.handleSubmit}>
                <FormControl label="Name" id="name">
                    <Input
                        placeholder="Input Book Name"
                        id="name"
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.errors && (
                        <label className="text-red-600">
                            {formik.errors['name']}
                        </label>
                    )}
                </FormControl>
                <FormControl label="Description" id="description">
                    <Input
                        placeholder="Input Description"
                        id="description"
                        type="text"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />

                    {formik.errors && (
                        <label className="text-red-600">
                            {formik.errors['description']}
                        </label>
                    )}
                </FormControl>
                <FormControl label="Price" id="price">
                    <Input
                        placeholder="Input Book Price"
                        id="price"
                        type="number"
                        name="price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    />
                    {formik.errors && (
                        <label className="text-red-600">
                            {formik.errors['price']}
                        </label>
                    )}
                </FormControl>
                <Button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}>
                    Submit
                </Button>
            </form>
        </div>
    )
}

Form.propTypes = {}

export default Form
