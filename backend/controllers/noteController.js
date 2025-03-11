import Note from "../models/noteModel.js";

export const getNotes = async (req, res) => {
    try {
        console.log('Fetching notes...');
        const response = await Note.findAll();
        console.log('Fetched notes:', response);
        res.status(200).json(response);
    } catch (error) {
        console.error('Error while fetching notes:', error.message);
        res.status(500).json({ msg: "Server Error", error: error.message });
    }
};

export const getNoteById = async (req, res) => {
    try {
        const response = await Note.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!response) {
            return res.status(404).json({ msg: "Note not found" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};

export const createNote = async (req, res) => {
    try {
        const { judul, deskripsi } = req.body;

        if (!judul || !deskripsi) {
            return res.status(400).json({ msg: "Title and content are required" });
        }

        await Note.create({ judul, deskripsi });
        res.status(201).json({ msg: "Note Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};


export const updateNote = async (req, res) => {
    try {
        const updated = await Note.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        if (updated[0] === 0) {
            return res.status(404).json({ msg: "Note not found" });
        }

        res.status(200).json({ msg: "Note Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const deleted = await Note.destroy({
            where: {
                id: req.params.id
            }
        });

        if (deleted === 0) {
            return res.status(404).json({ msg: "Note not found" });
        }

        res.status(200).json({ msg: "Note Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};

