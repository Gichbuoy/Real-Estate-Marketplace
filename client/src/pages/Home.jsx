// this contains home page content
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() { // pieces of state for listing
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [leaseListings, setLeaseListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings(); // fetch data for rent only after data for offer is loaded
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=6');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=6');
        const data = await res.json();
        setSaleListings(data);
        fetchLeaseListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchLeaseListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=lease&limit=6');
        const data = await res.json();
        setLeaseListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);


  return (
    <div className='-mt-12'>
      {/* top */ }
        <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
          <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
            Find your <span className='text-green-500'>home</span>
            <br />
            The <span className='text-slate-500'> perfect</span> place with ease
          </h1>
          <div className='text-black-400 text-xs sm:text-sm'>
            Find my Home is the best place to find your next perfect place to live.
            <br />
            We have a wide range of properties for you to choose from.
          </div>
          <Link
            to={"/search"}
            className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
          >
          Let's get started...
          </Link>
        </div>

       {/* swiper */}
       <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      { /* listing results for offer, sale, lease and rent */}
    
    <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
      
      {
        offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>
                Show more offers
              </Link>
            </div>

            <div className='flex flex-wrap gap-4'>
              {
                offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))
              }
            </div>
          </div>
        )
      }

      {
        rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>
                Show more places for rent
              </Link>
            </div>

            <div className='flex flex-wrap gap-4'>
              {
                rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))
              }
            </div>
          </div>
        )
      }

      {
        saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>
                Show more places for sale
              </Link>
            </div>

            <div className='flex flex-wrap gap-4'>
              {
                saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))
              }
            </div>
          </div>
        )
      }

      {
        leaseListings && leaseListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for lease</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=lease'}>
                Show more places for lease
              </Link>
            </div>

            <div className='flex flex-wrap gap-4'>
              {
                leaseListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))
              }
            </div>
          </div>
        )
      }
    </div>
    
    </div>
  );
}
