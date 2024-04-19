import React, { useState } from 'react';
import './Recommendcss.css';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Recommend = () => {
  const [plantType, setPlantType] = useState('');
  const [caringLevel, setCaringLevel] = useState('');
  const [wateringLevel, setWateringLevel] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [isGift, setisGift] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [category,setCategory] = useState("All");
  const [Products, setProducts] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let recommendedType = 'Outdoor';
    setCategory("Outdoor")
    if (caringLevel === 'low' || caringLevel ==="medium" || wateringLevel === 'low' || wateringLevel === 'medium' || growthRate === 'slow' || growthRate ==='medium' || isGift === 'yes' || isGift === 'maybe') {
      recommendedType = 'Indoor';
      setCategory("Indoor");
    }
    setRecommendation(`Based on your preferences, we recommend ${recommendedType} plants for you.`);
    setProducts(true);
  };

  return (
    <div className="plant-recommendation-page">
      <h1>We recommend the best plants for you</h1>
      <p className="description">
        Describe your plant preferences, and we'll suggest the perfect plants for your needs.
      </p>
      <form onSubmit={handleSubmit} className="plant-form">
        <div className="form-group">
          <label htmlFor="plantType">What kind of plants do you want?</label>
          <input
            type="text"
            id="plantType"
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="caringLevel">Caring level?</label>
          <select id="caringLevel" value={caringLevel} onChange={(e) => setCaringLevel(e.target.value)}>
            <option value="">Select caring level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="wateringLevel">Watering level?</label>
          <select id="wateringLevel" value={wateringLevel} onChange={(e) => setWateringLevel(e.target.value)}>
            <option value="">Select watering level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="growthRate">Growth rate?</label>
          <select id="growthRate" value={growthRate} onChange={(e) => setGrowthRate(e.target.value)}>
            <option value="">Select growth rate</option>
            <option value="slow">Slow</option>
            <option value="medium">Medium</option>
            <option value="fast">Fast</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="isGift">Do you want to gift it to someone?</label>
          <select id="isGift" value={isGift} onChange={(e) => setisGift(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="maybe">Not Sure</option>
          </select>
          
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {recommendation && <p className="recommendation">{recommendation}</p>}
      {Products && 
      <FoodDisplay category={category}/>}

    </div>
  );
};



    export default Recommend;

