export const tagService = {
    getTags,
    getById,
    addTag,
    updateTag,
    removeTag
}

async function getTags(filterBy = { txt: '', tags: [] }) {
    try {
        const response = await fetch(`http://127.0.0.1:3030/tags`)
        if (!response.ok) {
            throw new Error('Failed to fetch tags')
        }

        const tags = await response.json()

        if (tags && tags.length) {
            return tags.filter(tag => {
                return (
                    tag.title.includes(filterBy.txt) &&
                    filterBy.tags.every(tag => tag.tags.includes(tag))
                )
            })
        } else {
            return tags
        }
    } catch (error) {
        console.error('Error fetching tags:', error)
        throw error
    }
}

async function getById(id) {
    try {
        const response = await fetch(`http://127.0.0.1:3030/tags/${id}`)
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
        const response = await fetch('http://127.0.0.1:3030/tags', {
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

async function updateTag(tag) {
    try {
        const response = await fetch(`http://127.0.0.1:3030/tags/${tag._id}`, {
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

async function removeTag(id) {
    try {
        const response = await fetch(`http://127.0.0.1:3030/tags/${id}`, {
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