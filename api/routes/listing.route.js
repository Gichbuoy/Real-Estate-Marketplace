import express from 'express';
import { createListing, deleteListing, updateListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing); // validate user with verifyToken, and owner of listing, createlisting
router.delete('/delete/:id', verifyToken, deleteListing); // delete listing
router.post('/update/:id', verifyToken, updateListing);

export default router;