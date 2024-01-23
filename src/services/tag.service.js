import {serverUrl} from '../utils/env.js'

export const tagService = {
    getTags,
    getById,
    addTag,
    updateTag,
    removeTag
}

async function getTags() {
    try {
        const response = await fetch(`${serverUrl}/tags`)
        if (!response.ok) {
            throw new Error('Failed to fetch tags')
        }

        const tags = await response.json()

        return tags

    } catch (error) {
        console.error('Error fetching tags:', error)
        throw error
    }
}

async function getById(id) {
    try {
        const response = await fetch(`${serverUrl}/tags/${id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch tag')
        }
        const tag = await response.json()
        return tag
    } catch (error) {
        console.error('Error fetching tag:', error)
        throw error
    }
}

async function addTag(tag) {
    try {
        const response = await fetch(`${serverUrl}/tags`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tag)
        })

        if (!response.ok) {
            throw new Error('Failed to add tag')
        }

        return await response.json()
    } catch (error) {
        console.error('Error adding tag:', error)
        throw error
    }
}

async function removeTag(id) {
    try {
        const response = await fetch(`${serverUrl}/tags/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            throw new Error('Failed to remove tag')
        }

        return { success: true }
    } catch (error) {
        console.error('Error removing tag:', error)
        throw error
    }
}

async function updateTag(tag) {
    try {
        const response = await fetch(`${serverUrl}/tags/${tag._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tag)
        })

        if (!response.ok) {
            throw new Error('Failed to update tag')
        }
        return await response.json()
    } catch (error) {
        console.error('Error updating tag:', error)
        throw error
    }
}