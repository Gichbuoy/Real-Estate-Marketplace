import express from 'express';
import { createListing, deleteListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing); // validate user with verifyToken, and owner of listing, createlisting
router.delete('/delete/:id', verifyToken, deleteListing); // delete listing

export default router;