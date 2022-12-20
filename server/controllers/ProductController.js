//5 //imp Prod , //expo con , getProd, getProdByI, saveProd, updateProd, deleteProd // ที้งหมดใส่แค่หัวตัวแปล ยังไม่ได้ใส่ข้อมูลใน {}
//8 ใส่ข้อมูลใน {} ของ export con , getprod, getProdById, saveProd
//12 impo fs, ใส่ข้อมูลใน {} ของ ex con delete
//14 ใส่ข้อมูลใน {} ของ ex con update
// 35 impo md5
// 36 ใช้ md5 ที่ const fileName
import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";
import md5 from "md5"

export const getProducts = async (req, res) => {
    try {
        const response = await Product.findAll();
        res.json(response);
    } catch (error) {
        console(error.message);
    }
};

export const getProductById = async (req, res) => {
    try {
        const response = await Product.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.json(response);
    } catch (error) {
        console(error.message);
    }
};

export const saveProduct = async (req, res) => {
    if (req.files === null)
        return res.status(400).json({ msg: "No File Uploaded" });
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    // const now = new Date();
    // const fileName = file.md5 + "-" + now.getTime() + ext;
    const fileName = md5(file + Date.now()) + ext
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = [".png", ".jpg", "jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
        return res.status(422).json({ msg: "Image must be less than 5 MB" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Product.create({ name: name, image: fileName, url: url });
            res.status(201).json({ msg: "Product Created Successfuly" });
        } catch (error) {
            console.log(error.message);
        }
    });
};

export const updateProduct = async (req, res) => {
    const product = await Product.findOne({
        where: {
            id: req.params.id,
        },
    });
    if (!product) return res.status(404).json({ msg: "No Data Found" });
    let fileName = "";
    let url = "";
    if (req.files === null) {
        fileName = Product.image;     
        url = Product.url
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        // const now = new Date();
        // fileName = file.md5 + "-" + now.getTime() + ext;
        // fileName = file.md5 + "-" + Date.now() + ext;
        fileName = md5(file + Date.now()) + ext
        
        // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
        const allowedType = [".png", "jpg", "jpeg"];
        
        if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
        if (fileSize > 5000000)
        return res
        .status(422)
        .json({ msg: "Image must be less than 5 MB" });
        
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        
        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
        url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    }
    const name = req.body.title;

    try {
        await Product.update(
            { name: name, image: fileName, url: url },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json({ msg: "Product Upddated Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteProduct = async (req, res) => {
    const product = await Product.findOne({
        where: {
            id: req.params.id,
        },
    });
    if (!product) return res.status(404).json({ msg: "No Data Found" });

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Product Deleted Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
};
