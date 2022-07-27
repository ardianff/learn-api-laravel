import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormControl from '@/components/form/formControl'
import Input from '@/components/form/input'
import Button from '@/components/form/button'
import Textarea from '@/components/form/textarea'
import axios from '@/lib/axios'

const Form = ({ handleAddBook }) => {
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
    })
    const handleChangeInput = e => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const { data } = await axios.post(
                'http://localhost:8000/api/books',
                form,
            )
            handleAddBook({ book: data.data })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-full max-w-xs">
            <form className="w-full" onSubmit={handleSubmit}>
                <FormControl label="Name" id="name">
                    <Input
                        placeholder="Input Book Name"
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleChangeInput}
                    />
                </FormControl>
                <FormControl label="Description" id="description">
                    <Textarea
                        placeholder="Input Description"
                        id="description"
                        name="description"
                        onChange={handleChangeInput}></Textarea>
                </FormControl>
                <FormControl label="Price" id="price">
                    <Input
                        placeholder="Input Book Price"
                        id="price"
                        type="number"
                        name="price"
                        onChange={handleChangeInput}
                    />
                </FormControl>
                <Button type="submit">Submit</Button>
            </form>
            {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
        </div>
    )
}

Form.propTypes = {}

export default Form
