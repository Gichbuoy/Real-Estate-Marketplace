import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>
            Create a Listing
        </h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input
                    type='text'
                    placeholder='Name'
                    className='border p-3 rounded-lg'
                    id='name'
                    maxLength='60'
                    minLength='10'
                    required
                />
                <textarea
                    type='text'
                    placeholder='Description'
                    className='border p-3 rounded-lg'
                    id='description'
                    required
                />
                <input
                    type='text'
                    placeholder='Address'
                    className='border p-3 rounded-lg'
                    id='address'
                    required
                />


                <div className='flex gap-6 flex-wrap'>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='sale' className='w-5' />
                        <span>Sell</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='rent' className='w-5' />
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='lease' className='w-5' />
                        <span>Lease</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='sale' className='w-5' />
                        <span>Parking spot</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='furnished' className='w-5' />
                        <span>Furnished</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='offer' className='w-5' />
                        <span>Offer</span>
                    </div>
                </div>
                <div className='flex flex-wrap gap-6'>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='bedrooms' min='1' max='10' required
                        className='p-3 border border-gray-300 rounded-lg'
                        />
                        <p>Beds</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='bathrooms' min='1' max='10' required
                        className='p-3 border border-gray-300 rounded-lg'
                        />
                        <p>Baths</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='regularPrice' required
                        className='p-3 w-40 border border-gray-300 rounded-lg'
                        />
                        <div className='flex flex-col items-center'>
                            <p>Regular price</p>
                            <span className='text-xs'>(ksh / month)</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='discountPrice' required
                        className='p-3 w-40 border border-gray-300 rounded-lg'
                        />
                        <div className='flex flex-col items-center'>
                            <p>Discounted price</p>
                            <span className='text-xs'>(ksh / month)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Images:
                <span className='font-normal text-gray-600 ml-2'>
                    The first image will be the cover (max 6)
                </span>
                </p>

                <div className='flex gap-4'>
                    <input className='p-3 border border-gray-300 rounded w-full'
                    type='file' id='images' accept='image/*' multiple />
                    <button className='p-3 text-green-700 border border-lime-800
                    rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
                </div>
                <button className='p-3 bg-green-700 text-white rounded-lg
            uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>
            </div>

            
        </form>
    </main>
  )
}
