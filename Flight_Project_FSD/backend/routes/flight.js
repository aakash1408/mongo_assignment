import express from 'express'
import Flight from '../models/Flight.js'
import jwt from 'jsonwebtoken'
import multer from 'multer'

const router= express.Router()

const SECRET = 'SECRET_KEY'

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req,file,cb) =>{
        cb(null, Date.now() + "-" + file.originalname)
    }
});

const upload = multer({storage});

const verifyAdmin = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1] // token will come from the postman headers
    try{
        const data = jwt.verify(token, SECRET)

        if (data.role !== 'admin')
            return res.sendStatus(403)
            next();
    }
    catch {
        res.sendStatus(401)
    }
}

// New Flight record  to be Added
router.post('/', verifyAdmin, upload.single('logo'), async (req,res) =>{
    const {flightNumber, departure , arrival, time} = req.body  // passing the data of the flight record to be added into the DB
    const logo = req.file.filename;
    const flight = new Flight({flightNumber, departure , arrival, time, logo})

    await flight.save()
    res.json(flight) 
})

router.put('/:id', verifyAdmin, upload.single('logo'), async (req, res) => {
    const { flightNumber, departure, arrival, time } = req.body;
    const updateData = { flightNumber, departure, arrival, time };
    if (req.file) updateData.logo = req.file.filename;
  
    const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updatedFlight);
  });
  
  // Delete flight
  router.delete('/:id', verifyAdmin, async (req, res) => {
    await Flight.findByIdAndDelete(req.params.id);
    res.json({ message: 'Flight deleted' });
  });
  

// Fetching all the flight records
router.get('/', async(req,res) =>{
    const flights = await Flight.find();
    res.json(flights)
})

export default router;