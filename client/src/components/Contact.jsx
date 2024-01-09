import { useEffect, useState } from 'react'

export default function Contact({listing}) {
    const [landlord, setLandlord] = useState(null);

    useEffect(() => {
        const fetchLandlord = async () => {
            try {
                const res = await fetch(`/api/user/${listing.userRef}`);
                const data = await res.json();
                setLandlord(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchLandlord();

    }, [listing.userRef]);

  return (
    <>
        {landlord && (
            <div className=''>
                <p>Contact <span>{landlord.username}</span></p>
            </div>

        )}
    </>
  )
}
