import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { Box } from '@mui/material';

import {exerciseOptions, youtubeOptions, fetchData} from '../../exercise-app/src/utils/fetchData';
import Detail from '../../exercise-app/src/components/Detail';
import ExerciseVideos from '../../exercise-app/src/components/ExerciseVideos';


const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const {id} = useParams();
   
    
    useEffect(() => {
        const fetchExercisesData = async () => {
            try {
                const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
                const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com'

                const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
                setExerciseDetail(exerciseDetailData);

                const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
                console.log('Raw YouTube API response:', exerciseVideosData);
                
                // Check if we have contents and set them properly
                if (exerciseVideosData?.contents) {
                    setExerciseVideos(exerciseVideosData.contents);
                } else {
                    console.error('No contents in API response:', exerciseVideosData);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchExercisesData();
    }, [id]);

  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}     />

    </Box>
  )
}

export default ExerciseDetail