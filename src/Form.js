import React, { useState, useEffect } from 'react';
import ConfirmationModal from './ConfirmationModal';
import { useNavigate } from 'react-router-dom';
const BASE_URL_STATE = 'http://192.168.101.154:5000/api';

function Form() {

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const [startMonth, setStartMonth] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [clusters, setClusters] = useState([]);
  const [selectedClusters, setSelectedClusters] = useState('');
  const [groups, setGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState('');
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState('');
  
  const [cropmaster, setcropmaster] = useState([]);
  const [selectedcropmaster, setSelectedcropmaster] = useState('');
  const [cropvariety, setcropvariety] = useState([]);
  const [selectedcropvariety, setSelectedcropvariety] = useState('');

  const [cropsubvariety, setcropsubvariety] = useState([]);
  const [selectedcropsubvariety, setSelectedcropsubvariety] = useState('');


  const [cropmaster1, setcropmaster1] = useState([]);
  const [selectedcropmaster1, setSelectedcropmaster1] = useState('');
  const [cropvariety1, setcropvariety1] = useState([]);
  const [selectedcropvariety1, setSelectedcropvariety1] = useState('');

  const [cropsubvariety1, setcropsubvariety1] = useState([]);
  const [selectedcropsubvariety1, setSelectedcropsubvariety1] = useState('');



  
  const [cropmaster2, setcropmaster2] = useState([]);
  const [selectedcropmaster2, setSelectedcropmaster2] = useState('');
  const [cropvariety2, setcropvariety2] = useState([]);
  const [selectedcropvariety2, setSelectedcropvariety2] = useState('');

  const [cropsubvariety2, setcropsubvariety2] = useState([]);
  const [selectedcropsubvariety2, setSelectedcropsubvariety2] = useState('');


  const [cropmaster3, setcropmaster3] = useState([]);
  const [selectedcropmaster3, setSelectedcropmaster3] = useState('');
  const [cropvariety3, setcropvariety3] = useState([]);
  const [selectedcropvariety3, setSelectedcropvariety3] = useState('');

  const [cropsubvariety3, setcropsubvariety3] = useState([]);
  const [selectedcropsubvariety3, setSelectedcropsubvariety3] = useState('');


  const [selectedDoorNo, setSelectedDoorNo] = useState('');
  const [selectedStreet, setSelectedStreet] = useState('');
  const [selectedAadharNumber, setSelectedAadharNumber] = useState('');
  const [selectedFarmerName, setSelectedFarmerName] = useState('');
  const [selectedSpouseName, setSelectedSpouseName] = useState('');
  const [selectedFatherName, setSelectedFatherName] = useState('');
  const [selectedDateBirth, setSelectedDateBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedFarmerMobile, setSelectedFarmerMobile] = useState('');
  const [selectedAlternateNumber, setSelectedAlternateNumber] = useState('');
  const [selectedIsMemberInFPO, setSelectedIsMemberInFPO] = useState('');
  const [selectedNameOfTheFPO, setSelectedNameOfTheFPO] = useState('');
  const [selectedLatitude, setSelectedLatitude] = useState('');
  const [selectedLongitude, setSelectedLongitude] = useState('');
  const [error, setError] = useState(null);

 
  const [selectedIrrigationType, setSelectedIrrigationType] = useState('');
  const [selectedTotalAcresInTankfed, setSelectedTotalAcresInTankfed] = useState('');
  const [selectedAreaOfCultivationInTankfed, setSelectedAreaOfCultivationInTankfed] = useState('');
  const [selectedSoilType1, setSelectedSoilType1] = useState('');
  const [selectedLandOwnership1, setSelectedLandOwnership1] = useState('');
  const [selectedCultivationPractice1, setSelectedCultivationPractice1] = useState('');
  const [selectedLandPosition1, setSelectedLandPosition1] = useState('');
  const [selectedLandType1, setSelectedLandType1] = useState('');
  const [selectedSeason1, setSelectedSeason1] = useState('');
  const [selectedFertilizer1, setSelectedFertilizer1] = useState('');
  const [selectedBioFertilizer1, setSelectedBioFertilizer1] = useState('');
  const [selectedLastYearYields1, setSelectedLastYearYields1] = useState('');
  const [selectedRateOfSales1, setSelectedRateOfSales1] = useState('');
  const [selectedAvailabilityOfMachinery1, setSelectedAvailabilityOfMachinery1] = useState('');
  const [selectedCropInsurance1, setSelectedCropInsurance1] = useState('');
  const [selectedTotalAcresInRainfed, setSelectedTotalAcresInRainfed] = useState('');
  const [selectedAreaOfCultivationInRainfed, setSelectedAreaOfCultivationInRainfed] = useState('');
  const [selectedSoilType2, setSelectedSoilType2] = useState('');
  const [selectedLandOwnership2, setSelectedLandOwnership2] = useState('');
  const [selectedCultivationPractice2, setSelectedCultivationPractice2] = useState('');
  const [selectedLandPosition2, setSelectedLandPosition2] = useState('');
  const [selectedLandType2, setSelectedLandType2] = useState('');
  const [selectedSeason2, setSelectedSeason2] = useState('');
  const [selectedFertilizer2, setSelectedFertilizer2] = useState('');
  const [selectedBioFertilizer2, setSelectedBioFertilizer2] = useState('');
  const [selectedLastYearYields2, setSelectedLastYearYields2] = useState('');
  const [selectedRateOfSales2, setSelectedRateOfSales2] = useState('');
  const [selectedAvailabilityOfMachinery2, setSelectedAvailabilityOfMachinery2] = useState('');
  const [selectedCropInsurance2, setSelectedCropInsurance2] = useState('');
  const [selectedTotalAcresInBorewell, setSelectedTotalAcresInBorewell] = useState('');
  const [selectedAreaOfCultivationInBorewell, setSelectedAreaOfCultivationInBorewell] = useState('');
  const [selectedSoilType3, setSelectedSoilType3] = useState('');
  const [selectedLandOwnership3, setSelectedLandOwnership3] = useState('');
  const [selectedCultivationPractice3, setSelectedCultivationPractice3] = useState('');
  const [selectedLandPosition3, setSelectedLandPosition3] = useState('');
  const [selectedLandType3, setSelectedLandType3] = useState('');
  const [selectedSeason3, setSelectedSeason3] = useState('');
  const [selectedFertilizer3, setSelectedFertilizer3] = useState('');
  const [selectedBioFertilizer3, setSelectedBioFertilizer3] = useState('');
  const [selectedLastYearYields3, setSelectedLastYearYields3] = useState('');
  const [selectedRateOfSales3, setSelectedRateOfSales3] = useState('');
  const [selectedAvailabilityOfMachinery3, setSelectedAvailabilityOfMachinery3] = useState('');
  const [selectedCropInsurance3, setSelectedCropInsurance3] = useState('');
  const [selectedTotalAcresInDripOpenWellCanalIrrigation, setSelectedTotalAcresInDripOpenWellCanalIrrigation] = useState('');
  const [selectedAreaOfCultivationInDripOpenWellCanalIrrigation, setSelectedAreaOfCultivationInDripOpenWellCanalIrrigation] = useState('');
  const [selectedSoilType, setSelectedSoilType] = useState('');
  const [selectedLandOwnership, setSelectedLandOwnership] = useState('');
  const [selectedCultivationPractice, setSelectedCultivationPractice] = useState('');
  const [selectedLandPosition, setSelectedLandPosition] = useState('');
  const [selectedLandType, setSelectedLandType] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedFertilizer, setSelectedFertilizer] = useState('');
  const [selectedBioFertilizer, setSelectedBioFertilizer] = useState('');
  const [selectedLastYearYields, setSelectedLastYearYields] = useState('');
  const [selectedRateOfSales, setSelectedRateOfSales] = useState('');
  const [selectedAvailabilityOfMachinery, setSelectedAvailabilityOfMachinery] = useState('');
  const [selectedCropInsurance, setSelectedCropInsurance] = useState('');
  const [selectedLiveStockDetails, setSelectedLiveStockDetails] = useState('');
  const [selectedNoOfLivestockCow, setSelectedNoOfLivestockCow] = useState('');
  const [selectedVarietyBreadCow, setSelectedVarietyBreadCow] = useState('');
  const [selectedFeedingTypeCow, setSelectedFeedingTypeCow] = useState('');
  const [selectedWhetherFodderCultivatedCow, setSelectedWhetherFodderCultivatedCow] = useState('');
  const [selectedNoOfMilkYieldingAnimalCow, setSelectedNoOfMilkYieldingAnimalCow] = useState('');
  const [selectedMilkYieldDayAnimalCow, setSelectedMilkYieldDayAnimalCow] = useState('');
  const [selectedFrequencyOfSalesCow, setSelectedFrequencyOfSalesCow] = useState('');
  const [selectedAverageIncomeCow, setSelectedAverageIncomeCow] = useState('');
  const [selectedNearbyVeterinaryHospitalCow, setSelectedNearbyVeterinaryHospitalCow] = useState('');
  const [selectedAnySeasonalDiseaseOutbreakCow, setSelectedAnySeasonalDiseaseOutbreakCow] = useState('');
  const [selectedTreatmentMethodFollowedCow, setSelectedTreatmentMethodFollowedCow] = useState('');
  const [selectedNoOfLivestockBuffalow, setSelectedNoOfLivestockBuffalow] = useState('');
  const [selectedVarietyBreadBuffalow, setSelectedVarietyBreadBuffalow] = useState('');
  const [selectedFeedingTypeBuffalow, setSelectedFeedingTypeBuffalow] = useState('');
  const [selectedWhetherFodderCultivatedBuffalow, setSelectedWhetherFodderCultivatedBuffalow] = useState('');
  const [selectedNoOfMilkYieldingAnimalBuffalow, setSelectedNoOfMilkYieldingAnimalBuffalow] = useState('');
  const [selectedMilkYieldDayAnimalBuffalow, setSelectedMilkYieldDayAnimalBuffalow] = useState('');
  const [selectedFrequencyOfSalesBuffalow, setSelectedFrequencyOfSalesBuffalow] = useState('');
  const [selectedAverageIncomeBuffalow, setSelectedAverageIncomeBuffalow] = useState('');
  const [selectedNearbyVeterinaryHospitalBuffalow, setSelectedNearbyVeterinaryHospitalBuffalow] = useState('');
  const [selectedAnySeasonalDiseaseOutbreakBuffalow, setSelectedAnySeasonalDiseaseOutbreakBuffalow] = useState('');
  const [selectedTreatmentMethodFollowedBuffalow, setSelectedTreatmentMethodFollowedBuffalow] = useState('');
  const [selectedNoOfLivestockGoat, setSelectedNoOfLivestockGoat] = useState('');
  const [selectedVarietyBreadGoat, setSelectedVarietyBreadGoat] = useState('');
  const [selectedFeedingTypeGoat, setSelectedFeedingTypeGoat] = useState('');
  const [selectedWhetherFodderCultivatedGoat, setSelectedWhetherFodderCultivatedGoat] = useState('');
  const [selectedNoOfMilkYieldingAnimalGoat, setSelectedNoOfMilkYieldingAnimalGoat] = useState('');
  const [selectedMilkYieldDayAnimalGoat, setSelectedMilkYieldDayAnimalGoat] = useState('');
  const [selectedFrequencyOfSalesGoat, setSelectedFrequencyOfSalesGoat] = useState('');
  const [selectedAverageIncomeGoat, setSelectedAverageIncomeGoat] = useState('');
  const [selectedNearbyVeterinaryHospitalGoat, setSelectedNearbyVeterinaryHospitalGoat] = useState('');
  const [selectedAnySeasonalDiseaseOutbreakGoat, setSelectedAnySeasonalDiseaseOutbreakGoat] = useState('');
  const [selectedTreatmentMethodFollowedGoat, setSelectedTreatmentMethodFollowedGoat] = useState('');
  const [selectedNoOfLivestockSheep, setSelectedNoOfLivestockSheep] = useState('');
  const [selectedVarietyBreadSheep, setSelectedVarietyBreadSheep] = useState('');
  const [selectedFeedingTypeSheep, setSelectedFeedingTypeSheep] = useState('');
  const [selectedWhetherFodderCultivatedSheep, setSelectedWhetherFodderCultivatedSheep] = useState('');
  const [selectedNoOfMilkYieldingAnimalSheep, setSelectedNoOfMilkYieldingAnimalSheep] = useState('');
  const [selectedMilkYieldDayAnimalSheep, setSelectedMilkYieldDayAnimalSheep] = useState('');
  const [selectedFrequencyOfSalesSheep, setSelectedFrequencyOfSalesSheep] = useState('');
  const [selectedAverageIncomeSheep, setSelectedAverageIncomeSheep] = useState('');
  const [selectedNearbyVeterinaryHospitalSheep, setSelectedNearbyVeterinaryHospitalSheep] = useState('');
  const [selectedAnySeasonalDiseaseOutbreakSheep, setSelectedAnySeasonalDiseaseOutbreakSheep] = useState('');
  const [selectedTreatmentMethodFollowedSheep, setSelectedTreatmentMethodFollowedSheep] = useState('');
  const [selectedLiveStockInsuranceDetails, setSelectedLiveStockInsuranceDetails] = useState('');
  const [selectedLiveStockInsuranceDetailsCow20, setSelectedLiveStockInsuranceDetailsCow20] = useState('');
  const [selectedLiveStockInsuranceDetailsCow21, setSelectedLiveStockInsuranceDetailsCow21] = useState('');
  const [selectedLiveStockInsuranceDetailsCow22, setSelectedLiveStockInsuranceDetailsCow22] = useState('');
  const [selectedLiveStockInsuranceDetailsCow23, setSelectedLiveStockInsuranceDetailsCow23] = useState('');
  const [selectedLiveStockInsuranceDetailsCow24, setSelectedLiveStockInsuranceDetailsCow24] = useState('');

  const [selectedLiveStockInsuranceDetailsbuffalo20, setSelectedLiveStockInsuranceDetailsbuffalo20] = useState('');
  const [selectedLiveStockInsuranceDetailsbuffalo21, setSelectedLiveStockInsuranceDetailsbuffalo21] = useState('');
  const [selectedLiveStockInsuranceDetailsbuffalo22, setSelectedLiveStockInsuranceDetailsbuffalo22] = useState('');
  const [selectedLiveStockInsuranceDetailsbuffalo23, setSelectedLiveStockInsuranceDetailsbuffalo23] = useState('');
  const [selectedLiveStockInsuranceDetailsbuffalo24, setSelectedLiveStockInsuranceDetailsbuffalo24] = useState('');

  const [selectedLiveStockInsuranceDetailsgoat20, setSelectedLiveStockInsuranceDetailsgoat20] = useState('');
  const [selectedLiveStockInsuranceDetailsgoat21, setSelectedLiveStockInsuranceDetailsgoat21] = useState('');
  const [selectedLiveStockInsuranceDetailsgoat22, setSelectedLiveStockInsuranceDetailsgoat22] = useState('');
  const [selectedLiveStockInsuranceDetailsgoat23, setSelectedLiveStockInsuranceDetailsgoat23] = useState('');
  const [selectedLiveStockInsuranceDetailsgoat24, setSelectedLiveStockInsuranceDetailsgoat24] = useState('');

  const [selectedLiveStockInsuranceDetailssheep20, setSelectedLiveStockInsuranceDetailssheep20] = useState('');
  const [selectedLiveStockInsuranceDetailssheep21, setSelectedLiveStockInsuranceDetailssheep21] = useState('');
  const [selectedLiveStockInsuranceDetailssheep22, setSelectedLiveStockInsuranceDetailssheep22] = useState('');
  const [selectedLiveStockInsuranceDetailssheep23, setSelectedLiveStockInsuranceDetailssheep23] = useState('');
  const [selectedLiveStockInsuranceDetailssheep24, setSelectedLiveStockInsuranceDetailssheep24] = useState('');


  const [selectedLiveStockInsuranceDetailsothers20, setSelectedLiveStockInsuranceDetailsothers20] = useState('');
  const [selectedLiveStockInsuranceDetailsothers21, setSelectedLiveStockInsuranceDetailsothers21] = useState('');
  const [selectedLiveStockInsuranceDetailsothers22, setSelectedLiveStockInsuranceDetailsothers22] = useState('');
  const [selectedLiveStockInsuranceDetailsothers23, setSelectedLiveStockInsuranceDetailsothers23] = useState('');
  const [selectedLiveStockInsuranceDetailsothers24, setSelectedLiveStockInsuranceDetailsothers24] = useState('');
  const [selectedirrigationtyperainfed, setSelectedirrigationtyperainfed] = useState('');
  const [selectedirrigationtypeborewell, setSelectedirrigationtypeborewell] = useState('');
  const [selectedirrigationtypedrip, setSelectedirrigationtypedrip] = useState('');


  const [selectedLivestockbuffalow, setSelectedLivestockbuffalow] = useState('');
  const [selectedLivestockgoat, setSelectedLivestockgoat] = useState('');
  const [selectedLivestocksheep, setSelectedLivestocksheep] = useState('');

  const handleStartMonthChange = (event) => {
    setStartMonth(event.target.value);
  };

  const handleEndMonthChange = (event) => {
    setEndMonth(event.target.value);
  };
  const year = new Date();

  const navigate = useNavigate(); 

  const handleViewReport = () => {
    navigate('/record');
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const initialShowFields = {
    tankfed: false,
    rainfed: false,
    borewell: false,
    drip: false,
    cow: false,
    buffalow: false,
    goat: false,
    sheep: false,
    others: false,
  };

  const [showFields, setShowFields] = useState(initialShowFields);


  const getLocation = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location fetched successfully", position);
          setSelectedLatitude(position.coords.latitude);
          setSelectedLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error fetching location", error);
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };
  
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setShowFields((prevFields) => ({
      ...prevFields,
      [name]: checked,
    }));
  };


  const setSelectedFieldsToEmpty = () => {
    Object.keys(showFields).forEach(field => {
      if (typeof showFields[field] === 'function') {
        showFields[field]('');
      }
    });
  };


  const [showAddress, setShowAddress] = useState(false);

  const toggleAddress = () => {
    setShowAddress(!showAddress);
  };
  const [showContact, setShowContact] = useState(false);
  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  const [showLinks, setShowLinks] = useState(false);

  const handleFollowClick = () => {
    setShowLinks(!showLinks);
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleFormSubmit = async () => {
    if (!selectedState) {
      alert('Please fill out state');
      return;
    }
    if (!selectedDistrict) {
      alert('Please fill out district');
      return;
    }
    if (!selectedLocation) {
      alert('Please fill out location');
      return;
    }
    if (!selectedClusters) {
      alert('Please fill out cluster');
      return;
    }
    if (!selectedGroups) {
      alert('Please fill out group');
      return;
    }
    if (!selectedMembers) {
      alert('Please fill out members');
      return;
    }
    if (!selectedFarmerName) {
      alert('Please fill out farmer name');
      return;
    }
    if (!selectedFarmerMobile) {
      alert('Please fill out farmer mobile');
    }else{
          emptyValue(); 
    }

    const formData = {
      startMonth :startMonth,
      endMonth:endMonth,
      state: selectedState,
      district: selectedDistrict,
      location: selectedLocation,
      cluster: selectedClusters,
      grp: selectedGroups,
      mbr: selectedMembers,
      doorNo: selectedDoorNo,
      street: selectedStreet,
      aadharNumber: selectedAadharNumber,
      farmerName: selectedFarmerName,
      spouseName: selectedSpouseName,
      fatherName: selectedFatherName,
      datebirth: selectedDateBirth,
      gender: selectedGender,
      farmerMobile: selectedFarmerMobile,
      alternateNumber: selectedAlternateNumber,
      isMemberinFPO: selectedIsMemberInFPO,
      nameoftheFPO: selectedNameOfTheFPO,
      latitude: selectedLatitude,
      longitude: selectedLongitude,
      irrigationType: selectedIrrigationType,
      irrigationtyperainfed: selectedirrigationtyperainfed,
      irrigationtypeborewell: selectedirrigationtypeborewell,
      irrigationtypedrip: selectedirrigationtypedrip,
      totalAcresinTankfed: selectedTotalAcresInTankfed,
      areaofCultivationinTankfed: selectedAreaOfCultivationInTankfed,
      soilType1: selectedSoilType1,
      landownership1: selectedLandOwnership1,
      cultivationpractice1: selectedCultivationPractice1,
      landposition1: selectedLandPosition1,
      landtype1: selectedLandType1,

      cropname: selectedcropmaster,
      variety: selectedcropvariety,
      subvariety: selectedcropsubvariety,


      cropname1: selectedcropmaster1,
      variety1: selectedcropvariety1,
      subvariety1: selectedcropsubvariety1,
       
     
      cropname2: selectedcropmaster2,
      variety2: selectedcropvariety2,
      subvariety2: selectedcropsubvariety2,

      cropname3: selectedcropmaster3,
      variety3: selectedcropvariety3,
      subvariety3: selectedcropsubvariety3,
  

      season1: selectedSeason1,
      fertilizer1: selectedFertilizer1,
      biofertilizer1: selectedBioFertilizer1,
      lastyearyields1: selectedLastYearYields1,
      rateofsales1: selectedRateOfSales1,
      availabilityofMachinery1: selectedAvailabilityOfMachinery1,
      cropInsurance1: selectedCropInsurance1,
      totalAcresinRainfed: selectedAreaOfCultivationInRainfed,
      areaofCultivationinRainfed: selectedAreaOfCultivationInRainfed,
      soilType2: selectedSoilType2,
      landownership2: selectedLandOwnership2,
      cultivationpractice2: selectedCultivationPractice2,
      landposition2: selectedLandPosition2,
      landtype2: selectedLandType2,
      season2: selectedSeason2,
      fertilizer2: selectedFertilizer2,
      biofertilizer2: selectedBioFertilizer2,
      lastyearyields2: selectedLastYearYields2,
      rateofsales2: selectedRateOfSales2,
      availabilityofMachinery2: selectedAvailabilityOfMachinery2,
      cropInsurance2: selectedCropInsurance2,
      totalAcresinBorewell: selectedTotalAcresInBorewell,
      areaofCultivationinBorewell: selectedAreaOfCultivationInBorewell,
      soilType3: selectedSoilType3,
      landownership3: selectedLandOwnership3,
      cultivationpractice3: selectedCultivationPractice3,
      landposition3: selectedLandPosition3,
      landtype3: selectedLandType3,
      season3: selectedSeason3,
      fertilizer3: selectedFertilizer3,
      biofertilizer3: selectedBioFertilizer3,
      lastyearyields3: selectedLastYearYields3,
      rateofsales3: selectedRateOfSales3,
      availabilityofMachinery3: selectedAvailabilityOfMachinery3,
      cropInsurance3: selectedCropInsurance3,

      totalAcresinDripOpenWellCanalIrrigation: selectedTotalAcresInDripOpenWellCanalIrrigation,
      areaofCultivationinDripOpenWellCanalIrrigation: selectedAreaOfCultivationInDripOpenWellCanalIrrigation,
      soilType: selectedSoilType,
      landownership: selectedLandOwnership,
      cultivationpractice: selectedCultivationPractice,
      landposition: selectedLandPosition,
      landtype: selectedLandType,
      // cropname: Selectedcropmaster,
      // variety: selectedVariety,
      // subvariety: selectedSubVariety,
      season: selectedSeason,
      fertilizer: selectedFertilizer,
      biofertilizer: selectedBioFertilizer,
      lastyearyields: selectedLastYearYields,
      rateofsales: selectedRateOfSales,
      availabilityofMachinery: selectedAvailabilityOfMachinery,
      cropInsurance: selectedCropInsurance,
      liveStockDetails: selectedLiveStockDetails,
      NoofLivestockCow: selectedNoOfLivestockCow,
      VarietyBreadCow: selectedVarietyBreadCow,
      FeedingTypeCow: selectedFeedingTypeCow,
      WhetherFodderCultivatedCow: selectedWhetherFodderCultivatedCow,
      NoofMilkYieldingAnimalCow: selectedMilkYieldDayAnimalBuffalow,
      MilkYieldDayAnimalCow: selectedMilkYieldDayAnimalCow,
      FrequencyofSalesCow: selectedFrequencyOfSalesCow,
      AverageIncomeCow: selectedAverageIncomeCow,
      NearbyVeterinaryHospitalCow: selectedNearbyVeterinaryHospitalCow,
      AnyseasonaldiseaseoutbreakCow: selectedAnySeasonalDiseaseOutbreakCow,
      TreatmentMethodFollowedCow: selectedTreatmentMethodFollowedCow,
      NoofLivestockBuffalow: selectedNearbyVeterinaryHospitalCow,
      VarietyBreadBuffalow: selectedVarietyBreadBuffalow,
      FeedingTypeBuffalow: selectedFeedingTypeBuffalow,
      WhetherFodderCultivatedBuffalow: selectedWhetherFodderCultivatedBuffalow,
      NoofMilkYieldingAnimalBuffalow: selectedNoOfMilkYieldingAnimalBuffalow,
      MilkYieldDayAnimalBuffalow: selectedMilkYieldDayAnimalBuffalow,
      FrequencyofSalesBuffalow: selectedFrequencyOfSalesBuffalow,
      AverageIncomeBuffalow: selectedAverageIncomeBuffalow,
      NearbyVeterinaryHospitalBuffalow: selectedNearbyVeterinaryHospitalBuffalow,
      AnyseasonaldiseaseoutbreakBuffalow: selectedAnySeasonalDiseaseOutbreakBuffalow,
      TreatmentMethodFollowedBuffalow: selectedTreatmentMethodFollowedBuffalow,
      NoofLivestockGoat: selectedNoOfLivestockGoat,
      VarietyBreadGoat: selectedVarietyBreadGoat,
      FeedingTypeGoat: selectedFeedingTypeGoat,
      WhetherFodderCultivatedGoat: selectedWhetherFodderCultivatedGoat,
      NoofMilkYieldingAnimalGoat: selectedNoOfMilkYieldingAnimalGoat,
      MilkYieldDayAnimalGoat: selectedMilkYieldDayAnimalGoat,
      FrequencyofSalesGoat: selectedFrequencyOfSalesGoat,
      AverageIncomeGoat: selectedAverageIncomeGoat,
      NearbyVeterinaryHospitalGoat: selectedNearbyVeterinaryHospitalGoat,
      AnyseasonaldiseaseoutbreakGoat: selectedAnySeasonalDiseaseOutbreakGoat,
      TreatmentMethodFollowedGoat: selectedTreatmentMethodFollowedGoat,
      NoofLivestockSheep: selectedNoOfLivestockSheep,
      VarietyBreadSheep: selectedVarietyBreadSheep,
      FeedingTypeSheep: selectedFeedingTypeSheep,
      WhetherFodderCultivatedSheep: selectedWhetherFodderCultivatedSheep,
      NoofMilkYieldingAnimalSheep: selectedNoOfMilkYieldingAnimalSheep,
      MilkYieldDayAnimalSheep: selectedMilkYieldDayAnimalSheep,
      FrequencyofSalesSheep: selectedFrequencyOfSalesSheep,
      AverageIncomeSheep: selectedAverageIncomeSheep,
      NearbyVeterinaryHospitalSheep: selectedNearbyVeterinaryHospitalSheep,
      AnyseasonaldiseaseoutbreakSheep: selectedTreatmentMethodFollowedSheep,
      TreatmentMethodFollowedSheep: selectedTreatmentMethodFollowedSheep,
      LiveStockInsuranceDetails: selectedLiveStockInsuranceDetails,

      LiveStockInsuranceDetailsCow20: selectedLiveStockInsuranceDetailsCow20,
      LiveStockInsuranceDetailsCow21: selectedLiveStockInsuranceDetailsCow21,
      LiveStockInsuranceDetailsCow22: selectedLiveStockInsuranceDetailsCow22,
      LiveStockInsuranceDetailsCow23: selectedLiveStockInsuranceDetailsCow23,
      LiveStockInsuranceDetailsCow24: selectedLiveStockInsuranceDetailsCow24,
      LiveStockInsuranceDetailsbuffalo20: selectedLiveStockInsuranceDetailsbuffalo20,
      LiveStockInsuranceDetailsbuffalo21: selectedLiveStockInsuranceDetailsbuffalo21,
      LiveStockInsuranceDetailsbuffalo22: selectedLiveStockInsuranceDetailsbuffalo22,
      LiveStockInsuranceDetailsbuffalo23: selectedLiveStockInsuranceDetailsbuffalo23,
      LiveStockInsuranceDetailsbuffalo24: selectedLiveStockInsuranceDetailsbuffalo24,



      LiveStockInsuranceDetailsgoat20: selectedLiveStockInsuranceDetailsgoat20,
      LiveStockInsuranceDetailsgoat21: selectedLiveStockInsuranceDetailsgoat21,
      LiveStockInsuranceDetailsgoat22: selectedLiveStockInsuranceDetailsgoat22,
      LiveStockInsuranceDetailsgoat23: selectedLiveStockInsuranceDetailsgoat23,
      LiveStockInsuranceDetailsgoat24: selectedLiveStockInsuranceDetailsgoat24,


      LiveStockInsuranceDetailssheep20: selectedLiveStockInsuranceDetailssheep20,
      LiveStockInsuranceDetailssheep21: selectedLiveStockInsuranceDetailssheep21,
      LiveStockInsuranceDetailssheep22: selectedLiveStockInsuranceDetailssheep22,
      LiveStockInsuranceDetailssheep23: selectedLiveStockInsuranceDetailssheep23,
      LiveStockInsuranceDetailssheep24: selectedLiveStockInsuranceDetailssheep24,


      LiveStockInsuranceDetailsothers20: selectedLiveStockInsuranceDetailsothers20,
      LiveStockInsuranceDetailsothers21: selectedLiveStockInsuranceDetailsothers21,
      LiveStockInsuranceDetailsothers22: selectedLiveStockInsuranceDetailsothers22,
      LiveStockInsuranceDetailsothers23: selectedLiveStockInsuranceDetailsothers23,
      LiveStockInsuranceDetailsothers24: selectedLiveStockInsuranceDetailsothers24,


      Livestockbuffalow: selectedLivestockbuffalow,
      Livestockgoat: selectedLivestockgoat,
      Livestocksheep: selectedLivestocksheep,





    };

    try {
      console.log('MYDATA', formData);
      const response = await fetch('http://192.168.101.154:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network request failed');
      }
      
      
      console.log(formData);
    
    } catch (error) {
      console.error(error);
    }
  };
  const emptyValue = async () => {

    setIsSubmitted(true);  setStartMonth('');  setEndMonth(''); setSelectedState(''); setSelectedDistrict(''); setSelectedLocation(''); setSelectedClusters(''); setSelectedGroups(''); setSelectedMembers(''); setSelectedDoorNo(''); setSelectedStreet(''); setSelectedAadharNumber(''); setSelectedFarmerName(''); setSelectedSpouseName(''); setSelectedFatherName(''); setSelectedDateBirth(''); setSelectedGender(''); setSelectedFarmerMobile(''); setSelectedAlternateNumber(''); setSelectedIsMemberInFPO(''); setSelectedNameOfTheFPO(''); setSelectedLatitude('');
    setSelectedLongitude(''); setSelectedIrrigationType(''); setSelectedTotalAcresInTankfed(''); setSelectedAreaOfCultivationInTankfed(''); setSelectedSoilType1(''); setSelectedLandOwnership1(''); setSelectedCultivationPractice1(''); setSelectedLandPosition1(''); setSelectedLandType1(''); 
    setSelectedSeason1(''); setSelectedFertilizer1(''); setSelectedBioFertilizer1('');
    setSelectedLastYearYields1(''); setSelectedRateOfSales1(''); setSelectedAvailabilityOfMachinery1(''); setSelectedCropInsurance1('');
    setSelectedTotalAcresInRainfed(''); setSelectedAreaOfCultivationInRainfed('');
    setSelectedSoilType2(''); setSelectedLandOwnership2(''); setSelectedCultivationPractice2(''); setSelectedLandPosition2(''); setSelectedLandType2(''); 
     setSelectedSeason2(''); setSelectedFertilizer2(''); setSelectedBioFertilizer2(''); setSelectedLastYearYields2('');
    setSelectedRateOfSales2(''); setSelectedAvailabilityOfMachinery2(''); setSelectedCropInsurance2(''); setSelectedTotalAcresInBorewell('');
    setSelectedAreaOfCultivationInBorewell(''); setSelectedSoilType3(''); setSelectedLandOwnership3(''); setSelectedCultivationPractice3('');
    setSelectedLandPosition3(''); setSelectedLandType3('');
   setSelectedSeason3(''); setSelectedFertilizer3(''); setSelectedBioFertilizer3(''); setSelectedLastYearYields3('');
    setSelectedRateOfSales3(''); setSelectedAvailabilityOfMachinery3(''); setSelectedCropInsurance3(''); setSelectedTotalAcresInDripOpenWellCanalIrrigation(''); setSelectedAreaOfCultivationInDripOpenWellCanalIrrigation(''); setSelectedSoilType('');
    setSelectedLandOwnership(''); setSelectedCultivationPractice(''); setSelectedLandPosition(''); setSelectedLandType(''); 

    setSelectedSeason('');
    setSelectedFertilizer('');
    setSelectedBioFertilizer('');
    setSelectedLastYearYields('');
    setSelectedRateOfSales('');
    setSelectedAvailabilityOfMachinery('');
    setSelectedCropInsurance('');
    setSelectedLiveStockDetails('');
    setSelectedNoOfLivestockCow('');
    setSelectedVarietyBreadCow('');
    setSelectedFeedingTypeCow('');
    setSelectedWhetherFodderCultivatedCow('');
    setSelectedMilkYieldDayAnimalBuffalow('');
    setSelectedNoOfMilkYieldingAnimalCow('');
    setSelectedMilkYieldDayAnimalCow('');
    setSelectedFrequencyOfSalesCow('');
    setSelectedAverageIncomeCow('');
    setSelectedNearbyVeterinaryHospitalCow('');
    setSelectedAnySeasonalDiseaseOutbreakCow('');
    setSelectedTreatmentMethodFollowedCow('');
    setSelectedNoOfLivestockBuffalow('');
    setSelectedVarietyBreadBuffalow('');
    setSelectedFeedingTypeBuffalow('');
    setSelectedWhetherFodderCultivatedBuffalow('');
    setSelectedNoOfMilkYieldingAnimalBuffalow('');
    setSelectedMilkYieldDayAnimalBuffalow('');
    setSelectedFrequencyOfSalesBuffalow('');
    setSelectedAverageIncomeBuffalow('');
    setSelectedNearbyVeterinaryHospitalBuffalow('');
    setSelectedAnySeasonalDiseaseOutbreakBuffalow('');
    setSelectedTreatmentMethodFollowedBuffalow('');
    setSelectedNoOfLivestockGoat('');
    setSelectedVarietyBreadGoat('');
    setSelectedFeedingTypeGoat('');
    setSelectedWhetherFodderCultivatedGoat('');
    setSelectedNoOfMilkYieldingAnimalGoat('');
    setSelectedMilkYieldDayAnimalGoat('');
    setSelectedFrequencyOfSalesGoat('');
    setSelectedAverageIncomeGoat('');
    setSelectedNearbyVeterinaryHospitalGoat('');
    setSelectedAnySeasonalDiseaseOutbreakGoat('');
    setSelectedTreatmentMethodFollowedGoat('');
    setSelectedNoOfLivestockSheep('');
    setSelectedVarietyBreadSheep('');
    setSelectedFeedingTypeSheep('');
    setSelectedWhetherFodderCultivatedSheep('');
    setSelectedNoOfMilkYieldingAnimalSheep('');
    setSelectedMilkYieldDayAnimalSheep('');
    setSelectedFrequencyOfSalesSheep('');
    setSelectedAverageIncomeSheep('');
    setSelectedNearbyVeterinaryHospitalSheep('');
    setSelectedAnySeasonalDiseaseOutbreakSheep('');
    setSelectedTreatmentMethodFollowedSheep('');
    setSelectedLiveStockInsuranceDetails('');

    setSelectedLiveStockInsuranceDetailsCow20('');
    setSelectedLiveStockInsuranceDetailsCow21('');
    setSelectedLiveStockInsuranceDetailsCow22('');
    setSelectedLiveStockInsuranceDetailsCow23('');
    setSelectedLiveStockInsuranceDetailsCow24('');
    setSelectedLiveStockInsuranceDetailsbuffalo20('');
    setSelectedLiveStockInsuranceDetailsbuffalo21(''); setSelectedLiveStockInsuranceDetailsbuffalo22(''); setSelectedLiveStockInsuranceDetailsbuffalo23('');
    setSelectedLiveStockInsuranceDetailsbuffalo24('');
    setSelectedLiveStockInsuranceDetailsgoat20(''); setSelectedLiveStockInsuranceDetailsgoat21(''); setSelectedLiveStockInsuranceDetailsgoat22(''); setSelectedLiveStockInsuranceDetailsgoat23('');
    setSelectedLiveStockInsuranceDetailsgoat24(''); setSelectedLiveStockInsuranceDetailssheep20(''); setSelectedLiveStockInsuranceDetailssheep21(''); setSelectedLiveStockInsuranceDetailssheep22(''); setSelectedLiveStockInsuranceDetailssheep23('');
    setSelectedLiveStockInsuranceDetailssheep24(''); setSelectedLiveStockInsuranceDetailsothers20(''); setSelectedLiveStockInsuranceDetailsothers21('');
    setSelectedLiveStockInsuranceDetailsothers22(''); setSelectedLiveStockInsuranceDetailsothers23(''); setSelectedLiveStockInsuranceDetailsothers24('');
    setSelectedLiveStockInsuranceDetailsothers20(''); setSelectedLiveStockInsuranceDetailsothers21(''); setSelectedLiveStockInsuranceDetailsothers22(''); setSelectedLiveStockInsuranceDetailsothers23(''); setSelectedLiveStockInsuranceDetailsothers24('');
    setShowFields(initialShowFields);
    setSelectedIrrigationType('');
    

    setSelectedcropvariety1('');
    setSelectedcropmaster1('');
    setSelectedcropvariety1('');
    setSelectedcropsubvariety1('');

    setSelectedcropmaster2('');
    setSelectedcropvariety2('');
    setSelectedcropsubvariety2('');
    

    setSelectedcropsubvariety3('');
    setSelectedcropvariety3('');
    setSelectedcropmaster3("");


    setSelectedLiveStockDetails('');
    setSelectedirrigationtyperainfed('');
    setSelectedirrigationtypeborewell('');
    setSelectedirrigationtypedrip('');
    setSelectedFieldsToEmpty();
  }
  const handleConfirm = () => {
    handleFormSubmit();
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };
  const fetchStates = async () => {
    try {
      const response = await fetch(`${BASE_URL_STATE}/state`);
      if (!response.ok) {
        throw new Error('Network request failed');
      }
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchDistricts = async (stateCode) => {
    try {
      const response = await fetch(`${BASE_URL_STATE}/district?state_scode=${stateCode}`);
      if (!response.ok) {
        throw new Error('Network request failed');
      }
      const data = await response.json();
      console.log('Districts:', data);
      setDistricts(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchLocations = async (districtCode) => {
    try {
      const response = await fetch(`${BASE_URL_STATE}/location?district_dcode=${districtCode}`);
      if (!response.ok) {
        throw new Error('Network request failed');
      }
      const data = await response.json();
      console.log('Locations:', data);
      setLocations(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchClusters = async (locationCode) => {
    try {
      const response = await fetch(`${BASE_URL_STATE}/cluster?location_lcode=${locationCode}`);
      if (!response.ok) {
        throw new Error('Network request failed');
      }
      const data = await response.json();
      console.log('Clusters:', data);
      setClusters(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchGroups = async (clusterCode) => {
    try {
      const response = await fetch(`${BASE_URL_STATE}/grp?cluster_ccode=${clusterCode}`);
      if (!response.ok) {
        throw new Error('Network request failed');
      }
      const data = await response.json();
      setGroups(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchMembers = async (groupCode) => {
    try {
      const response = await fetch(`${BASE_URL_STATE}/members?group_gcode=${groupCode}`);
      if (!response.ok) {
        throw new Error('Network request failed');
      }
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error(error);
    }
  };
  
//

const fetchcropmaster1 = async () => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropmaster1`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    setcropmaster1(data);
    console.log(cropmaster1);
  } catch (error) {
    console.error(error);
  }
};

const fetchcropvariety1 = async (ccode) => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropvariety1?ccode=${ccode}`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    console.log('variety:', data);
    setcropvariety1(data);
  } catch (error) {
    console.error(error);
  }
};

const fetchcropsubvariety1 = async (v_id) => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropsubvariety1?v_id=${v_id}`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    console.log('subvariety:', data);
    setcropsubvariety1(data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchcropmaster1();
}, []);

useEffect(() => {
  fetchcropmaster1();
}, [fetchcropmaster1]);

useEffect(() => {
  if (selectedcropmaster1) {
    fetchcropvariety1(selectedcropmaster1);
  }
}, [selectedcropmaster1]);

useEffect(() => {
  if (selectedcropvariety1) {
    fetchcropsubvariety1(selectedcropvariety1);
  }
}, [selectedcropvariety1]);


  

const handleCropmasterChange1 = (value) => {
  setSelectedcropmaster1(value);
};

const handleVarity1 = (value) => {
  setSelectedcropvariety1(value);
 
};

const handlesubVarity1 = (value) => {
  setSelectedcropsubvariety1(value);
 
};


///
const fetchcropmaster2 = async () => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropmaster2`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    setcropmaster2(data);
    console.log(cropmaster2);
  } catch (error) {
    console.error(error);
  }
};

const fetchcropvariety2 = async (ccode) => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropvariety2?ccode=${ccode}`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    console.log('variety:', data);
    setcropvariety2(data);
  } catch (error) {
    console.error(error);
  }
};

const fetchcropsubvariety2 = async (v_id) => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropsubvariety2?v_id=${v_id}`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    console.log('subvariety:', data);
    setcropsubvariety2(data);
  } catch (error) {
    console.error(error);
  }
};



useEffect(() => {
  fetchcropmaster2();
}, []);
useEffect(() => {
  fetchcropmaster2();
}, [fetchcropmaster2]);

useEffect(() => {
  if (selectedcropmaster2) {
    fetchcropvariety2(selectedcropmaster2);
  }
}, [selectedcropmaster2]);

useEffect(() => {
  if (selectedcropvariety2) {
    fetchcropsubvariety2(selectedcropvariety2);
  }
}, [selectedcropvariety2]);




const handleCropmasterChange2 = (value) => {
  setSelectedcropmaster2(value);
};

const handleVarity2 = (value) => {
  setSelectedcropvariety2(value);
 
};

const handlesubVarity2 = (value) => {
  setSelectedcropsubvariety2(value);
 
};


const fetchcropmaster3 = async () => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropmaster3`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    setcropmaster3(data);
    console.log(cropmaster2);
  } catch (error) {
    console.error(error);
  }
};

const fetchcropvariety3 = async (ccode) => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropvariety3?ccode=${ccode}`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
   
    setcropvariety3(data);
    console.log('variety:', data);
  } catch (error) {
    console.error(error);
  }
};

const fetchcropsubvariety3 = async (v_id) => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropsubvariety3?v_id=${v_id}`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    console.log('subvariety:', data);
    setcropsubvariety3(data);
  } catch (error) {
    console.error(error);
  }
};



useEffect(() => {
  fetchcropmaster3();
}, []);

useEffect(() => {
  fetchcropmaster3();
}, [fetchcropmaster3]);

useEffect(() => {
  if (selectedcropmaster3) {
    fetchcropvariety3(selectedcropmaster3);
  }
}, [selectedcropmaster3]);

useEffect(() => {
  if (selectedcropvariety3) {
    fetchcropsubvariety3(selectedcropvariety3);
  }
}, [selectedcropvariety3]);




const handleCropmasterChange3 = (value) => {
  setSelectedcropmaster3(value);
  console.log(value);
};

const handleVarity3 = (value) => {
  setSelectedcropvariety3(value);
 
};

const handlesubVarity3 = (value) => {
  setSelectedcropsubvariety3(value);
 
};





const fetchcropmaster = async () => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropmaster`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    setcropmaster(data);
    console.log(cropmaster);
  } catch (error) {
    console.error(error);
  }
};

const fetchcropvariety = async (ccode) => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropvariety?ccode=${ccode}`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    console.log('variety:', data);
    setcropvariety(data);
  } catch (error) {
    console.error(error);
  }
};

const fetchcropsubvariety = async (v_id) => {
  try {
    const response = await fetch(`${BASE_URL_STATE}/cropsubvariety?v_id=${v_id}`);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    const data = await response.json();
    console.log('subvariety:', data);
    setcropsubvariety(data);
  } catch (error) {
    console.error(error);
  }
};



useEffect(() => {
  fetchcropmaster();
}, []);

useEffect(() => {
  fetchcropmaster();
}, [fetchcropmaster]);

useEffect(() => {
  if (selectedcropmaster) {
    fetchcropvariety(selectedcropmaster);
  }
}, [selectedcropmaster]);

useEffect(() => {
  if (selectedcropvariety) {
    fetchcropsubvariety(selectedcropvariety);
  }
}, [selectedcropvariety]);




const handleCropmasterChange = (value) => {
  setSelectedcropmaster(value);
};

const handleVarity = (value) => {
  setSelectedcropvariety(value);
 
};

const handlesubVarity = (value) => {
  setSelectedcropsubvariety(value);
 
};















  
  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchDistricts(selectedState);
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedDistrict) {
      fetchLocations(selectedDistrict);
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedLocation) {
      fetchClusters(selectedLocation);
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (selectedClusters) {
      fetchGroups(selectedClusters);
    }
  }, [selectedClusters]);

  useEffect(() => {
    if (selectedGroups) {
      fetchMembers(selectedGroups);
    }
  }, [selectedGroups]);

  const handleStateChange = (value) => {
    setSelectedState(value);
    setSelectedDistrict('');
    setSelectedLocation('');
    setSelectedClusters('');
    setSelectedGroups('');
    setSelectedMembers('');
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    setSelectedLocation('');
    setSelectedClusters('');
    setSelectedGroups('');
    setSelectedMembers('');
  };

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
    setSelectedClusters('');
    setSelectedGroups('');
    setSelectedMembers('');
  };

  const handleClusterChange = (value) => {
    setSelectedClusters(value);
    setSelectedGroups('');
    setSelectedMembers('');
  };

  const handleGroupChange = (value) => {
    setSelectedGroups(value);
    setSelectedMembers('');
  };

  const handleMemberChange = (value) => {
    setSelectedMembers(value);
  };

  return (
    <form className='form1'>
      <div className="form-container">
        <div className="title ">
          <h3 id="start" style={{ fontSize: '20px', fontFamily: 'Times New Roman', fontWeight: 'bold', color: '#333' }}>FARMER REGISTRATION FORM</h3>
        </div>
         <div style={{ textAlign: 'center', marginBottom: '10px' }}>
       
    </div>
    <div className="form-row">
        <div className="form-group">
          <label htmlFor="startMonth">Select Start Season:</label>
          <select value={startMonth} onChange={handleStartMonthChange}>
            <option value="" disabled>Select start month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="endMonth">Select End Season:</label>
          <select value={endMonth} onChange={handleEndMonthChange}>
            <option value="" disabled>Select end month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>
     
        <div className="form-row" >
          <div className="form-group">
            <label htmlFor="state">1.State</label>
            <select id="state" value={selectedState} onChange={(e) => handleStateChange(e.target.value)}>
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.scode} value={state.scode}>
                  {state.sname}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="district">2.District</label>
            <select id="district" value={selectedDistrict} onChange={(e) => handleDistrictChange(e.target.value)}>
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district.district_dcode} value={district.district_dcode}>
                  {district.district_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row" >
          <div className="form-group">
            <label htmlFor="location">3.Location</label>
            <select id="location" value={selectedLocation} onChange={(e) => handleLocationChange(e.target.value)}>
              <option value="">Select Location</option>
              {locations.map((location) => (
                <option key={location.location_lcode} value={location.location_lcode}>
                  {location.location_lname}
                </option>
              ))}
            </select>
          </div>





          <div className="form-group">
            <label htmlFor="cluster">4.Cluster</label>
            <select id="cluster" value={selectedClusters} onChange={(e) => handleClusterChange(e.target.value)}>
              <option value="">Select Cluster</option>
              {clusters.map((cluster) => (
                <option key={cluster.cluster_ccode} value={cluster.cluster_ccode}>
                  {cluster.cluster_cname}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row" >
          <div className="form-group">
            <label htmlFor="group">5.Group</label>
            <select id="group" value={selectedGroups} onChange={(e) => handleGroupChange(e.target.value)}>
              <option value="">Select Group</option>
              {groups.map((group) => (
                <option key={group.group_gcode} value={group.group_gcode}>
                  {group.group_cname}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="member">6.Member</label>
            <select id="member" value={selectedMembers} onChange={(e) => handleMemberChange(e.target.value)}>
              <option value="">Select Member</option>
              {members.map((member) => (
                <option key={member.unique_id} value={member.unique_id}>
                  {member.unique_id}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="doorNo"> 7.Door No</label>
              <input type="text" id="doorNo" name="doorNo" value={selectedDoorNo} onChange={(e) => setSelectedDoorNo(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="street">8.Street</label>
              <input type="text" id="street" name="street" value={selectedStreet} onChange={(e) => setSelectedStreet(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="aadharNumber">9.Aadhar Number</label>
            <input type="text" id="Aadhar Number" name="Aadhar Number" value={selectedAadharNumber} onChange={(e) => setSelectedAadharNumber(e.target.value)} />
          </div>
          <div className="form-group">
          <label htmlFor="farmerName">
          10. Farmer Name
        </label>
        <input
          type="text"
          id="farmerName"
          name="farmerName"
          value={selectedFarmerName}
          onChange={(e) => setSelectedFarmerName(e.target.value)}
          required
        />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="spouseName">11.Spouse Name</label>
            <input type="text" id="Spouse Name" name="Spouse Name" value={selectedSpouseName} onChange={(e) => setSelectedSpouseName(e.target.value)} />

          </div>
          <div className="form-group">
            <label htmlFor="fatherName">12.Father Name</label>
            <input type="text" id="Father Name" name="Father Name" value={selectedFatherName} onChange={(e) => setSelectedFatherName(e.target.value)} />

          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label htmlFor="dob">13.Date of Birth</label>
              <input type="date" id="dob" name="dob" value={selectedDateBirth} onChange={(e) => setSelectedDateBirth(e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <div className="form-gender">
              <div style={{ display: 'flex', alignItems: 'center', width: '250px' }}>
                <label htmlFor="gender">14. Gender</label>
                <select id="gender" value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
                  <option value="select">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="FarmerMobile">15.Farmer Mobile</label>
            <input type="text" id="FarmerMobile" name="FarmerMobile" value={selectedFarmerMobile} onChange={(e) => setSelectedFarmerMobile(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="AlternaterNumber">16.Alternate Number</label>
            <input type="text" id="AlternateNumber" name="AlternateNumber" value={selectedAlternateNumber} onChange={(e) => setSelectedAlternateNumber(e.target.value)} />
          </div>
        </div>


        <div className="form-row">
          <div className="form-group">
            <label htmlFor="isMemberInFPO">17. Is Member in FPO</label>
            <select id="isMemberInFPO" name="isMemberInFPO" value={selectedIsMemberInFPO} onChange={(e) => setSelectedIsMemberInFPO(e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fpo">18.Name of the FPO</label>
            <input type="text" id="fpo" name="fpo" value={selectedNameOfTheFPO} onChange={(e) => setSelectedNameOfTheFPO(e.target.value)} />
          </div>
        </div>
        <div>
     
      <button style={{ marginBottom: '10px' }} onClick={getLocation}>Get Location</button>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="latitude">19. Latitude</label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              value={selectedLatitude}
              onChange={(e) => setSelectedLatitude(e.target.value)} readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="longitude">20. Longitude</label>
            <input
              type="text"
              id="longitude"
              name="longitude"
              value={selectedLongitude}
              onChange={(e) => setSelectedLongitude(e.target.value)} readOnly
            />
          </div>
        </div>
      )}
    </div>
  
        <div className="form-row">
          <div className="form-group">
            <div className="Irrigation">
              <label htmlFor="Irrigation">21.Irrigation Type</label><br></br>
              <div className="checkbox-group-container">
                <div className="checkbox-group" value={selectedIrrigationType} onChange={(e) => setSelectedIrrigationType(e.target.value)}>
                  <label>
                    <input type="checkbox" id="tankfed1" name="tankfed" value="Tankfed" checked={showFields.tankfed} onChange={handleCheckboxChange} /> Tankfed
                  </label>
                </div>
                <div className="checkbox-group" value={selectedirrigationtyperainfed} onChange={(e) => setSelectedirrigationtyperainfed(e.target.value)}>
                  <label>
                    <input type="checkbox" id="rainfed2" name="rainfed" value="Rainfed" checked={showFields.rainfed} onChange={handleCheckboxChange} /> Rainfed
                  </label>
                </div>
                <div className="checkbox-group" value={selectedirrigationtypeborewell} onChange={(e) => setSelectedirrigationtypeborewell(e.target.value)}>
                  <label>
                    <input
                      type="checkbox" id="borewell3" name="borewell" value="Borewell" checked={showFields.borewell} onChange={handleCheckboxChange} /> Bore Well
                  </label>
                </div>
                <div className="checkbox-group" value={selectedirrigationtypedrip} onChange={(e) => setSelectedirrigationtypedrip(e.target.value)}>
                  <label>
                    <input type="checkbox" id="drip4" name="drip" value="Drip" checked={showFields.drip} onChange={handleCheckboxChange} />  Drip/Open Well/Canal irrigation
                  </label>
                </div>

              </div>
            </div>
          </div>
        </div>
        {showFields.tankfed && (
          <div className='drop'>
            <span style={{ backgroundColor: 'forestgreen', fontWeight: 'bold', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', marginBottom: '10' }}>1.Tankfed</span>
            <div className="form-row">
              <div className="form-group">

                <label htmlFor="totalAcresTankfed">Total Acres </label>
                <input type="text" id="totalAcresTankfed" name="totalAcresTankfed" value={selectedTotalAcresInTankfed} onChange={(e) => setSelectedTotalAcresInTankfed(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="areaOfCultivationTankfed">Area of Cultivation</label>
                <input type="text" id="areaOfCultivationTankfed" name="selectedAreaOfCultivationInTankfed" value={selectedAreaOfCultivationInTankfed} onChange={(e) => setSelectedAreaOfCultivationInTankfed(e.target.value)} />

              </div>
              <div className="form-group">
                <label htmlFor="soilTypeDrip">Soil Type</label>
                <select id="soilTypeDrip" name="soilTypeDrip" value={selectedSoilType1} onChange={(e) => setSelectedSoilType1(e.target.value)} >
                  <option value="">Select</option>
                  <option value="Laterite Soil">Laterite Soil</option>
                  <option value="Red Soil">Red Soil</option>
                  <option value="Loamy Soil">Loamy Soil</option>
                  <option value="Black Cotton">Black Cotton</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="landOwnershipDrip">Land Ownership</label>
                <select id="landOwnershipDrip" name="landOwnershipDrip" value={selectedLandOwnership1} onChange={(e) => setSelectedLandOwnership1(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Own">Own</option>
                  <option value="LeasedIn">Leased In</option>
                  <option value="LeasedOut">Leased Out</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="CultivationPractice">Cultivation Practice</label>
                <select id="CultivationPractice" name="CultivationPractice" value={selectedCultivationPractice1} onChange={(e) => setSelectedCultivationPractice1(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Organic">Organic</option>
                  <option value="InOrganic">In Organic</option>
                  <option value="LeasedOut">Both</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="landPosition">Land Position</label>
                <select id="landPosition" name="landPosition" value={selectedLandPosition1} onChange={(e) => setSelectedLandPosition1(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Upper">Upper</option>
                  <option value="Lower">Lower</option>
                  <option value="Hill">Hill</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="landType">Land Type</label>
                <select id="landType" name="landType" value={selectedLandType1} onChange={(e) => setSelectedLandType1(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Sloppy">Sloppy</option>
                  <option value="Steep">Steep</option>
                  <option value="Plain">Plain</option>
                  <option value="Gently Sloppy">Gently Sloppy</option>
                  <option value="Flat">Flat</option>
                </select>
              </div>
            </div>
            <div className='crop-details'>
              <span style={{ backgroundColor: 'chocolate', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>Crop Details</span>
            </div>
            <div className="form-row">
             



          <div className="form-group">
            <label htmlFor="cropmaster1">Crop Name</label>
            <select id="cropmaster1" value={selectedcropmaster1} onChange={(e) => handleCropmasterChange1(e.target.value)}>
              <option value="">Select</option>
              {cropmaster1.map((cropmaster1) => (
                <option key={cropmaster1.ccode} value={cropmaster1.ccode}>
                  {cropmaster1.cname}
                </option>
              ))}
            </select>
          </div>
           <div className="form-group">
            <label htmlFor="cropvariety1">Crop Variety</label>
            <select id="cropvariety1" value={selectedcropvariety1} onChange={(e) => handleVarity1(e.target.value)}>
              <option value="">Select </option>
              {cropvariety1.map((cropvariety1) => (
                <option key={cropvariety1.v_id} value={cropvariety1.v_id}>
                  {cropvariety1.cvariety}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row" >
          <div className="form-group">
            <label htmlFor="cropsubvariety1">Crop Subvariety</label>
            <select id="cropsubvariety1" value={selectedcropsubvariety1} onChange={(e) => handlesubVarity1(e.target.value)}>
              <option value="">Select</option>
              {cropsubvariety1.map((cropsubvariety1) => (
                <option key={cropsubvariety1.sv_id} value={cropsubvariety1.sv_id}>
                  {cropsubvariety1.subvariety}
                </option>
              ))}
            </select>
          </div>
              <div className="form-group">   
                <label htmlFor="season">Season</label>
                <input type="text" id="season" name="season" value={selectedSeason1} onChange={(e) => setSelectedSeason1(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="fertilizer">Fertilizer</label>
                <input type="text" id="fertilizer" name="fertilizer" value={selectedFertilizer1} onChange={(e) => setSelectedFertilizer1(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="bioFertilizer">Bio-fertilizer</label>
                <input type="text" id="bioFertilizer" name="bioFertilizer" value={selectedBioFertilizer1} onChange={(e) => setSelectedBioFertilizer1(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="lastYearYields">Last Year Yield/Acre (Kg)</label>
                <input type="text" id="lastYearYields" name="lastYearYields" value={selectedLastYearYields1} onChange={(e) => setSelectedLastYearYields1(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="rateOfSales">Rate of Sales/Kg (Rs)</label>
                <input type="text" id="rateOfSales" name="rateOfSales" value={selectedRateOfSales1} onChange={(e) => setSelectedRateOfSales1(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="availabilityOfMachinery">Cost of Cultivation/Acre (Rs)</label>
                <input type="text" id="availabilityOfMachinery" name="availabilityOfMachinery" value={selectedAvailabilityOfMachinery1} onChange={(e) => setSelectedAvailabilityOfMachinery1(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="cropInsurance">Crop Insurance</label>
                <input type="text" id="cropInsurance" name="cropInsurance" value={selectedCropInsurance1} onChange={(e) => setSelectedCropInsurance1(e.target.value)} />
              </div>
            </div>

          </div>
        )}

        {showFields.rainfed && (
          <div className='drop'>
            <span style={{ backgroundColor: 'forestgreen', fontWeight: 'bold', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>2.Rainfed</span>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="Rainfed">Total Acres</label>
                <input type="text" id="Rainfed" name="Rainfed" value={selectedTotalAcresInRainfed} onChange={(e) => setSelectedTotalAcresInRainfed(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="areaOfCultivationRainfed">Area of Cultivation</label>
                <input type="text" id="areaOfCultivationRainfed" name="areaOfCultivationRainfed" value={selectedAreaOfCultivationInRainfed} onChange={(e) => setSelectedAreaOfCultivationInRainfed(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="soilTypeDrip">Soil Type</label>
                <select id="soilTypeDrip" name="soilTypeDrip" value={selectedSoilType2} onChange={(e) => setSelectedSoilType2(e.target.value)} >
                  <option value="">Select</option>
                  <option value="Laterite Soil">Laterite Soil</option>
                  <option value="Red Soil">Red Soil</option>
                  <option value="Loamy Soil">Loamy Soil</option>
                  <option value="Black Cotton">Black Cotton</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="landOwnershipDrip">Land Ownership</label>
                <select id="landOwnershipDrip" name="landOwnershipDrip" value={selectedLandOwnership2} onChange={(e) => setSelectedLandOwnership2(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Own">Own</option>
                  <option value="LeasedIn">Leased In</option>
                  <option value="LeasedOut">Leased Out</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="CultivationPractice">Cultivation Practice</label>
                <select id="CultivationPractice" name="CultivationPractice" value={selectedCultivationPractice2} onChange={(e) => setSelectedCultivationPractice2(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Organic">Organic</option>
                  <option value="InOrganic">In Organic</option>
                  <option value="LeasedOut">Both</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="landPosition">Land Position</label>
                <select id="landPosition" name="landPosition" value={selectedLandPosition2} onChange={(e) => setSelectedLandPosition2(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Upper">Upper</option>
                  <option value="Lower">Lower</option>
                  <option value="Hill">Hill</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="landType">Land Type</label>
                <select id="landType" name="landType" value={selectedLandType2} onChange={(e) => setSelectedLandType2(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Sloppy">Sloppy</option>
                  <option value="Steep">Steep</option>
                  <option value="Plain">Plain</option>
                  <option value="Gently Sloppy">Gently Sloppy</option>
                  <option value="Flat">Flat</option>
                </select>
              </div>
            </div>
            <div className='crop-details'>
              <span style={{ backgroundColor: 'chocolate', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>Crop Details</span>
            </div>
            <div className="form-row">
              

          <div className="form-group">
            <label htmlFor="cropmaster1">Crop Name</label>
            <select id="cropmaster1" value={selectedcropmaster2} onChange={(e) => handleCropmasterChange2(e.target.value)}>
              <option value="">Select</option>
              {cropmaster2.map((cropmaster2) => (
                <option key={cropmaster2.ccode} value={cropmaster2.ccode}>
                  {cropmaster2.cname}
                </option>
              ))}
            </select>
          </div>
           <div className="form-group">
            <label htmlFor="cropvariety1">Crop Variety</label>
            <select id="cropvariety1" value={selectedcropvariety2} onChange={(e) => handleVarity2(e.target.value)}>
              <option value="">Select </option>
              {cropvariety2.map((cropvariety2) => (
                <option key={cropvariety2.v_id} value={cropvariety2.v_id}>
                  {cropvariety2.cvariety}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row" >
          <div className="form-group">
            <label htmlFor="cropsubvariety1">Crop Subvariety</label>
            <select id="cropsubvariety1" value={selectedcropsubvariety2} onChange={(e) => handlesubVarity2(e.target.value)}>
              <option value="">Select</option>
              {cropsubvariety2.map((cropsubvariety2) => (
                <option key={cropsubvariety2.sv_id} value={cropsubvariety2.sv_id}>
                  {cropsubvariety2.subvariety}
                </option>
              ))}
            </select>
          </div>



              <div className="form-group">
                <label htmlFor="season">Season</label>
                <input type="text" id="season" name="season" value={selectedSeason2} onChange={(e) => setSelectedSeason2(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="fertilizer">Fertilizer</label>
                <input type="text" id="fertilizer" name="fertilizer" value={selectedFertilizer2} onChange={(e) => setSelectedFertilizer2(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="bioFertilizer">Bio-fertilizer</label>
                <input type="text" id="bioFertilizer" name="bioFertilizer" value={selectedBioFertilizer2} onChange={(e) => setSelectedBioFertilizer2(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="lastYearYields">Last Year Yield/Acre (Kg)</label>
                <input type="text" id="lastYearYields" name="lastYearYields" value={selectedLastYearYields2} onChange={(e) => setSelectedLastYearYields2(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="rateOfSales">Rate of Sales/Kg (Rs)</label>
                <input type="text" id="rateOfSales" name="rateOfSales" value={selectedRateOfSales2} onChange={(e) => setSelectedRateOfSales2(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="availabilityOfMachinery">Cost of Cultivation/Acre (Rs)</label>
                <input type="text" id="availabilityOfMachinery" name="availabilityOfMachinery" value={selectedAvailabilityOfMachinery2} onChange={(e) => setSelectedAvailabilityOfMachinery2(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="cropInsurance">Crop Insurance</label>
                <input type="text" id="cropInsurance" name="cropInsurance" value={selectedCropInsurance2} onChange={(e) => setSelectedCropInsurance2(e.target.value)} />
              </div>
            </div>
          </div>
        )}


        {showFields.borewell && (
          <div className='drop'>
            <span style={{ backgroundColor: 'forestgreen', fontWeight: 'bold', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>3.Borewell</span>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="borewell">Total Acres </label>
                <input type="text" id="borewell" name="borewell" value={selectedTotalAcresInBorewell} onChange={(e) => setSelectedTotalAcresInBorewell(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="areaOfCultivationborewell">Area of Cultivation</label>
                <input type="text" id="areaOfCultivationborewell" name="areaOfCultivationborewell" value={selectedAreaOfCultivationInBorewell} onChange={(e) => setSelectedAreaOfCultivationInBorewell(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="soilTypeDrip">Soil Type</label>
                <select id="soilTypeDrip" name="soilTypeDrip" value={selectedSoilType3} onChange={(e) => setSelectedSoilType3(e.target.value)} >
                  <option value="">Select</option>
                  <option value="Laterite Soil">Laterite Soil</option>
                  <option value="Red Soil">Red Soil</option>
                  <option value="Loamy Soil">Loamy Soil</option>
                  <option value="Black Cotton">Black Cotton</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="landOwnershipDrip">Land Ownership</label>
                <select id="landOwnershipDrip" name="landOwnershipDrip" value={selectedLandOwnership3} onChange={(e) => setSelectedLandOwnership3(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Own">Own</option>
                  <option value="LeasedIn">Leased In</option>
                  <option value="LeasedOut">Leased Out</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="CultivationPractice">Cultivation Practice</label>
                <select id="CultivationPractice" name="CultivationPractice" value={selectedCultivationPractice3} onChange={(e) => setSelectedCultivationPractice3(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Organic">Organic</option>
                  <option value="InOrganic">In Organic</option>
                  <option value="LeasedOut">Both</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="landPosition">Land Position</label>
                <select id="landPosition" name="landPosition" value={selectedLandPosition3} onChange={(e) => setSelectedLandPosition3(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Upper">Upper</option>
                  <option value="Lower">Lower</option>
                  <option value="Hill">Hill</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="landType">Land Type</label>
                <select id="landType" name="landType" value={selectedLandType3} onChange={(e) => setSelectedLandType3(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Sloppy">Sloppy</option>
                  <option value="Steep">Steep</option>
                  <option value="Plain">Plain</option>
                  <option value="Gently Sloppy">Gently Sloppy</option>
                  <option value="Flat">Flat</option>
                </select>
              </div>
            </div>

            <div className='crop-details'>
              <span style={{ backgroundColor: 'chocolate', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>Crop Details</span>
            </div>
            <div className="form-row">
             
            <div className="form-group">
        <label htmlFor="cropmaster2">Crop Name</label>
        <select id="cropmaster2" value={selectedcropmaster3} onChange={(e) => handleCropmasterChange3(e.target.value)}>
          <option value="">Select</option>
          {cropmaster3.map((cropmaster3) => (
            <option key={cropmaster3.ccode} value={cropmaster3.ccode}>
              {cropmaster3.cname}
            </option>
          ))}
        </select>
      </div>

      {/* const [cropmaster3, setcropmaster3] = useState([]);
  const [selectedcropmaster3, setSelectedcropmaster3] = useState('');
  const [cropvariety3, setcropvariety3] = useState([]);
  const [selectedcropvariety3, setSelectedcropvariety3] = useState('');

  const [cropsubvariety3, setcropsubvariety3] = useState([]);
  const [selectedcropsubvariety3, setSelectedcropsubvariety3] = useState(''); */}
      <div className="form-group">
        <label htmlFor="cropvariety2">Crop Variety</label>
        <select id="cropvariety2" value={selectedcropvariety3} onChange={(e) => handleVarity3(e.target.value)}>
          <option value="">Select</option>
          {cropvariety3.map((cropvariety3) => (
            <option key={cropvariety3.v_id} value={cropvariety3.v_id}>
              {cropvariety3.cvariety}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cropsubvariety2">Crop Subvariety</label>
        <select id="cropsubvariety2" value={selectedcropsubvariety3} onChange={(e) => handlesubVarity3(e.target.value)}>
          <option value="">Select</option>
          {cropsubvariety3.map((cropsubvariety3) => (
            <option key={cropsubvariety3.sv_id} value={cropsubvariety3.sv_id}>
              {cropsubvariety3.subvariety}
            </option>
          ))}
        </select>
      </div>
              <div className="form-group">
                <label htmlFor="season">Season</label>
                <input type="text" id="season" name="season" value={selectedSeason3} onChange={(e) => setSelectedSeason3(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="fertilizer">Fertilizer</label>
                <input type="text" id="fertilizer" name="fertilizer" value={selectedFertilizer3} onChange={(e) => setSelectedFertilizer3(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="bioFertilizer">Bio-fertilizer</label>
                <input type="text" id="bioFertilizer" name="bioFertilizer" value={selectedBioFertilizer3} onChange={(e) => setSelectedBioFertilizer3(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="lastYearYields">Last Year Yield/Acre (Kg)</label>
                <input type="text" id="lastYearYields" name="lastYearYields" value={selectedLastYearYields3} onChange={(e) => setSelectedLastYearYields3(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="rateOfSales">Rate of Sales/Kg (Rs)</label>
                <input type="text" id="rateOfSales" name="rateOfSales" value={selectedRateOfSales3} onChange={(e) => setSelectedRateOfSales3(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="availabilityOfMachinery">Cost of Cultivation/Acre (Rs)</label>
                <input type="text" id="availabilityOfMachinery" name="availabilityOfMachinery" value={selectedAvailabilityOfMachinery3} onChange={(e) => setSelectedAvailabilityOfMachinery3(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="cropInsurance">Crop Insurance</label>
                <input type="text" id="cropInsurance" name="cropInsurance" value={selectedCropInsurance3} onChange={(e) => setSelectedCropInsurance3(e.target.value)} />
              </div>
            </div>

          </div>
        )}
        {showFields.drip && (
          <div className='drop'>
            <span style={{ backgroundColor: 'forestgreen', fontWeight: 'bold', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>4.Drip/Openwell/Canal Irrigation</span>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="drip">Total Acres</label>
                <input type="text" id="drip" name="drip" value={selectedTotalAcresInDripOpenWellCanalIrrigation} onChange={(e) => setSelectedTotalAcresInDripOpenWellCanalIrrigation(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="areaOfCultivationDrip">Area of Cultivation</label>
                <input type="text" id="areaOfCultivationDrip" name="areaOfCultivationDrip" value={selectedAreaOfCultivationInDripOpenWellCanalIrrigation} onChange={(e) => setSelectedAreaOfCultivationInDripOpenWellCanalIrrigation(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="soilTypeDrip">Soil Type</label>
                <select id="soilTypeDrip" name="soilTypeDrip" value={selectedSoilType} onChange={(e) => setSelectedSoilType(e.target.value)} >
                  <option value="">Select</option>
                  <option value="Laterite Soil">Laterite Soil</option>
                  <option value="Red Soil">Red Soil</option>
                  <option value="Loamy Soil">Loamy Soil</option>
                  <option value="Black Cotton">Black Cotton</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="landOwnershipDrip">Land Ownership</label>
                <select id="landOwnershipDrip" name="landOwnershipDrip" value={selectedLandOwnership} onChange={(e) => setSelectedLandOwnership(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Own">Own</option>
                  <option value="LeasedIn">Leased In</option>
                  <option value="LeasedOut">Leased Out</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="CultivationPractice">Cultivation Practice</label>
                <select id="CultivationPractice" name="CultivationPractice" value={selectedCultivationPractice} onChange={(e) => setSelectedCultivationPractice(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Organic">Organic</option>
                  <option value="InOrganic">In Organic</option>
                  <option value="LeasedOut">Both</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="landPosition">Land Position</label>
                <select id="landPosition" name="landPosition" value={selectedLandPosition} onChange={(e) => setSelectedLandPosition(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Upper">Upper</option>
                  <option value="Lower">Lower</option>
                  <option value="Hill">Hill</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="landType">Land Type</label>
                <select id="landType" name="landType" value={selectedLandType} onChange={(e) => setSelectedLandType(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Sloppy">Sloppy</option>
                  <option value="Steep">Steep</option>
                  <option value="Plain">Plain</option>
                  <option value="Gently Sloppy">Gently Sloppy</option>
                  <option value="Flat">Flat</option>
                </select>
              </div>
            </div>

            <div className='crop-details'>
              <span style={{ backgroundColor: 'chocolate', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>Crop Details</span>

            </div>
            <div className="form-row">
             
          <div className="form-group">
            <label htmlFor="cropmaster">Crop Name</label>
            <select id="cropmaster" value={selectedcropmaster} onChange={(e) => handleCropmasterChange(e.target.value)}>
              <option value="">Select</option>
              {cropmaster.map((cropmaster) => (
                <option key={cropmaster.ccode} value={cropmaster.ccode}>
                  {cropmaster.cname}
                </option>
              ))}
            </select>
          </div>
           <div className="form-group">
            <label htmlFor="cropvariety">Crop Variety</label>
            <select id="cropvariety" value={selectedcropvariety} onChange={(e) => handleVarity(e.target.value)}>
              <option value="">Select </option>
              {cropvariety.map((cropvariety) => (
                <option key={cropvariety.v_id} value={cropvariety.v_id}>
                  {cropvariety.cvariety}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row" >
          <div className="form-group">
            <label htmlFor="cropsubvariety">Crop Subvariety</label>
            <select id="cropsubvariety" value={selectedcropsubvariety} onChange={(e) => handlesubVarity(e.target.value)}>
              <option value="">Select</option>
              {cropsubvariety.map((cropsubvariety) => (
                <option key={cropsubvariety.sv_id} value={cropsubvariety.sv_id}>
                  {cropsubvariety.subvariety}
                </option>
              ))}
            </select>
          </div>


              <div className="form-group">
                <label htmlFor="season">Season</label>
                <input type="text" id="season" name="season" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="fertilizer">Fertilizer</label>
                <input type="text" id="fertilizer" name="fertilizer" value={selectedFertilizer} onChange={(e) => setSelectedFertilizer(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="bioFertilizer">Bio-fertilizer</label>
                <input type="text" id="bioFertilizer" name="bioFertilizer" value={selectedBioFertilizer} onChange={(e) => setSelectedBioFertilizer(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="lastYearYields">Last Year Yield/Acre (Kg)</label>
                <input type="text" id="lastYearYields" name="lastYearYields" value={selectedLastYearYields} onChange={(e) => setSelectedLastYearYields(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="rateOfSales">Rate of Sales/Kg (Rs)</label>
                <input type="text" id="rateOfSales" name="rateOfSales" value={selectedRateOfSales} onChange={(e) => setSelectedRateOfSales(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="availabilityOfMachinery">Cost of Cultivation/kg (Rs)</label>
                <input type="text" id="availabilityOfMachinery" name="availabilityOfMachinery" value={selectedAvailabilityOfMachinery} onChange={(e) => setSelectedAvailabilityOfMachinery(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="cropInsurance">Crop Insurance</label>
                <input type="text" id="cropInsurance" name="cropInsurance" value={selectedCropInsurance} onChange={(e) => setSelectedCropInsurance(e.target.value)} />
              </div>
            </div>

          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <div className="Irrigation">

              <label htmlFor="livestockdetails">22. Live Stock Details</label><br></br>
              <div class="checkbox-group-container">
              
                <div className="checkbox-group" value={selectedLiveStockDetails} onChange={(e) => setSelectedLiveStockDetails(e.target.value)}>
                  <label>
                    <input type="checkbox" id="cow1" value="cow" name="cow" checked={showFields.cow} onChange={handleCheckboxChange} /> Cow
                  </label>
                </div>

                <div className="checkbox-group" value={selectedLivestockbuffalow} onChange={(e) => setSelectedLivestockbuffalow(e.target.value)}>
                  <label>
                    <input type="checkbox" id="buffalow2" value="buffalow" name="buffalow" checked={showFields.buffalow} onChange={handleCheckboxChange} /> Buffalo
                  </label>
                </div>

                <div className="checkbox-group" value={selectedLivestockgoat} onChange={(e) => setSelectedLivestockgoat(e.target.value)}>
                  <label>
                    <input type="checkbox" id="goat3" value="goat" name="goat" checked={showFields.goat} onChange={handleCheckboxChange} /> Goat
                  </label>
                </div>

                <div className="checkbox-group" value={selectedLivestocksheep} onChange={(e) => setSelectedLivestocksheep(e.target.value)}>
                  <label>
                    <input type="checkbox" id="sheep" value="sheep" name="sheep" checked={showFields.sheep} onChange={handleCheckboxChange} /> Sheep
                  </label>
                </div>

              </div>
            </div>
          </div>
        </div>

        {showFields.cow && (
          <div className="drop">
            <span style={{ backgroundColor: 'forestgreen', fontWeight: 'bold', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>1.Livestock details of Cow</span>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="noOfLivestock">No of Livestock</label>
                <input type="text" id="noOfLivestock" name="noOfLivestock" value={selectedNoOfLivestockCow} onChange={(e) => setSelectedNoOfLivestockCow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="varietyBread">Variety / Bread</label>
                <input type="text" id="varietyBread" name="varietyBread" value={selectedVarietyBreadCow} onChange={(e) => setSelectedVarietyBreadCow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="feedingType">Feeding Type</label>
                <select id="feedingType" name="feedingType" value={selectedFeedingTypeCow} onChange={(e) => setSelectedFeedingTypeCow(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Open Grazing">Open Grazing</option>
                  <option value="Stall feeding">Stall Feeding</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cultivated">Whether Fodder Cultivated?</label>
                <select id="cultivated" name="cultivated" value={selectedWhetherFodderCultivatedCow} onChange={(e) => setSelectedWhetherFodderCultivatedCow(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No"> No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="yield">No of Milk Yielding Animal</label>
                <input type="text" id="yield" name="yield" value={selectedNoOfMilkYieldingAnimalCow} onChange={(e) => setSelectedNoOfMilkYieldingAnimalCow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="Milkyield">Milk Yield/Day/Animal</label>
                <input type="text" id="Milkyield" name="Milkyield" value={selectedMilkYieldDayAnimalCow} onChange={(e) => setSelectedMilkYieldDayAnimalCow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="frequencyofsales">Frequency of Sales</label>
                <select id="frequencyofsales" name="frequencyofsales" value={selectedFrequencyOfSalesCow} onChange={(e) => setSelectedFrequencyOfSalesCow(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly"> Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Half Yearly"> Half Yearly</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Income">Average/Income</label>
                <input type="text" id="Average/Income" name="Average/Income" value={selectedAverageIncomeCow} onChange={(e) => setSelectedAverageIncomeCow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="veterinary">Nearby Veterinary Hospital</label>
                <input type="text" id="Average/Income" name="Average/Income" value={selectedNearbyVeterinaryHospitalCow} onChange={(e) => setSelectedNearbyVeterinaryHospitalCow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="disease">Any seasonal disease outbreak</label>
                <input type="text" id="disease" name="disease" value={selectedAnySeasonalDiseaseOutbreakCow} onChange={(e) => setSelectedAnySeasonalDiseaseOutbreakCow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="treatmentmethod">Treatment Method Followed</label>
                <select id="treatmentmethod" name="treatmentmethod" value={selectedTreatmentMethodFollowedCow} onChange={(e) => setSelectedTreatmentMethodFollowedCow(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Hospital"> Hospital</option>
                </select>
              </div>
            </div>
          </div>

        )}
        {showFields.buffalow && (
          <div className="drop">
            <span style={{ backgroundColor: 'forestgreen', fontWeight: 'bold', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>2.Livestock details of Buffalo</span>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="noOfLivestock">No of Livestock</label>
                <input type="text" id="noOfLivestock" name="noOfLivestock" value={selectedNoOfLivestockBuffalow} onChange={(e) => setSelectedNoOfLivestockBuffalow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="varietyBread">Variety / Bread</label>
                <input type="text" id="varietyBread" name="varietyBread" value={selectedVarietyBreadBuffalow} onChange={(e) => setSelectedVarietyBreadBuffalow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="feedingType">Feeding Type</label>
                <select id="feedingType" name="feedingType" value={selectedFeedingTypeBuffalow} onChange={(e) => setSelectedFeedingTypeBuffalow(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Open Grazing">Open Grazing</option>
                  <option value="Stall feeding">Stall Feeding</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cultivated">Whether Fodder Cultivated?</label>
                <select id="cultivated" name="cultivated" value={selectedWhetherFodderCultivatedBuffalow} onChange={(e) => setSelectedWhetherFodderCultivatedBuffalow(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No"> No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="yield">No of Milk Yielding Animal</label>
                <input type="text" id="yield" name="yield" value={selectedNoOfMilkYieldingAnimalBuffalow} onChange={(e) => setSelectedNoOfMilkYieldingAnimalBuffalow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="Milkyield">Milk Yield/Day/Animal</label>
                <input type="text" id="Milkyield" name="Milkyield" value={selectedMilkYieldDayAnimalBuffalow} onChange={(e) => setSelectedMilkYieldDayAnimalBuffalow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="frequencyofsales">Frequency of Sales</label>
                <select id="frequencyofsales" name="frequencyofsales" value={selectedFrequencyOfSalesBuffalow} onChange={(e) => setSelectedFrequencyOfSalesBuffalow(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly"> Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Half Yearly"> Half Yearly</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Income">Average/Income</label>
                <input type="text" id="Average/Income" name="Average/Income" value={selectedAverageIncomeBuffalow} onChange={(e) => setSelectedAverageIncomeBuffalow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="veterinary">Nearby Veterinary Hospital</label>
                <input type="text" id="Average/Income" name="Average/Income" value={selectedNearbyVeterinaryHospitalBuffalow} onChange={(e) => setSelectedNearbyVeterinaryHospitalBuffalow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="disease">Any seasonal disease outbreak</label>
                <input type="text" id="disease" name="disease" value={selectedAnySeasonalDiseaseOutbreakBuffalow} onChange={(e) => setSelectedAnySeasonalDiseaseOutbreakBuffalow(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="treatmentmethod">Treatment Method Followed</label>
                <select id="treatmentmethod" name="treatmentmethod" value={selectedTreatmentMethodFollowedBuffalow} onChange={(e) => setSelectedTreatmentMethodFollowedBuffalow(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Hospital"> Hospital</option>
                </select>
              </div>
            </div>
          </div>

        )}
        {showFields.goat && (
          <div className="drop">
            <span style={{ backgroundColor: 'forestgreen', fontWeight: 'bold', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>3.Livestock details of Goat</span>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="noOfLivestock">No of Livestock</label>
                <input type="text" id="noOfLivestock" name="noOfLivestock" value={selectedNoOfLivestockGoat} onChange={(e) => setSelectedNoOfLivestockGoat(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="varietyBread">Variety / Bread</label>
                <input type="text" id="varietyBread" name="varietyBread" value={selectedVarietyBreadGoat} onChange={(e) => setSelectedVarietyBreadGoat(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="feedingType">Feeding Type</label>
                <select id="feedingType" name="feedingType" value={selectedFeedingTypeGoat} onChange={(e) => setSelectedFeedingTypeGoat(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Open Grazing">Open Grazing</option>
                  <option value="Stall feeding">Stall Feeding</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cultivated">Whether Fodder Cultivated?</label>
                <select id="cultivated" name="cultivated" value={selectedWhetherFodderCultivatedGoat} onChange={(e) => setSelectedWhetherFodderCultivatedGoat(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No"> No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="yield">No of Milk Yielding Animal</label>
                <input type="text" id="yield" name="yield" value={selectedNoOfMilkYieldingAnimalGoat} onChange={(e) => setSelectedNoOfMilkYieldingAnimalGoat(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="Milkyield">Milk Yield/Day/Animal</label>
                <input type="text" id="Milkyield" name="Milkyield" value={selectedMilkYieldDayAnimalGoat} onChange={(e) => setSelectedMilkYieldDayAnimalGoat(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="frequencyofsales">Frequency of Sales</label>
                <select id="frequencyofsales" name="frequencyofsales" value={selectedFrequencyOfSalesGoat} onChange={(e) => setSelectedFrequencyOfSalesGoat(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly"> Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Half Yearly"> Half Yearly</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Income">Average/Income</label>
                <input type="text" id="Average/Income" name="Average/Income" value={selectedAverageIncomeGoat} onChange={(e) => setSelectedAverageIncomeGoat(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="veterinary">Nearby Veterinary Hospital</label>
                <input type="text" id="Average/Income" name="Average/Income" value={selectedNearbyVeterinaryHospitalGoat} onChange={(e) => setSelectedNearbyVeterinaryHospitalGoat(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="disease">Any seasonal disease outbreak</label>
                <input type="text" id="disease" name="disease" value={selectedAnySeasonalDiseaseOutbreakGoat} onChange={(e) => setSelectedAnySeasonalDiseaseOutbreakGoat(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="treatmentmethod">Treatment Method Followed</label>
                <select id="treatmentmethod" name="treatmentmethod" value={selectedTreatmentMethodFollowedGoat} onChange={(e) => setSelectedTreatmentMethodFollowedGoat(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Hospital"> Hospital</option>
                </select>
              </div>
            </div>
          </div>

        )}
        {showFields.sheep && (
          <div className="drop">
            <span style={{ backgroundColor: 'forestgreen', fontWeight: 'bold', color: 'white', padding: '8px 16px', textAlign: 'center', display: 'inline-block', fontSize: '16px', margin: '4px 2px', borderRadius: '8px', }}>4.Livestock details of Sheep</span>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="noOfLivestock">No of Livestock</label>
                <input type="text" id="noOfLivestock" name="noOfLivestock" value={selectedNoOfLivestockSheep} onChange={(e) => setSelectedNoOfLivestockSheep(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="varietyBread">Variety / Bread</label>
                <input type="text" id="varietyBread" name="varietyBread" value={selectedVarietyBreadSheep} onChange={(e) => setSelectedVarietyBreadSheep(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="feedingType">Feeding Type</label>
                <select id="feedingType" name="feedingType " value={selectedFeedingTypeSheep} onChange={(e) => setSelectedFeedingTypeSheep(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Open Grazing">Open Grazing</option>
                  <option value="Stall feeding">Stall Feeding</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cultivated">Whether Fodder Cultivated?</label>
                <select id="cultivated" name="cultivated" value={selectedWhetherFodderCultivatedSheep} onChange={(e) => setSelectedWhetherFodderCultivatedSheep(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No"> No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="yield">No of Milk Yielding Animal</label>
                <input type="text" id="yield" name="yield" value={selectedNoOfMilkYieldingAnimalSheep} onChange={(e) => setSelectedNoOfMilkYieldingAnimalSheep(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="Milkyield">Milk Yield/Day/Animal</label>
                <input type="text" id="Milkyield" name="Milkyield" value={selectedMilkYieldDayAnimalSheep} onChange={(e) => setSelectedMilkYieldDayAnimalSheep(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="frequencyofsales">Frequency of Sales</label>
                <select id="frequencyofsales" name="frequencyofsales" value={selectedFrequencyOfSalesSheep} onChange={(e) => setSelectedFrequencyOfSalesSheep(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly"> Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Half Yearly"> Half Yearly</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Income">Average/Income</label>
                <input type="text" id="Average/Income" name="Average/Income" value={selectedAverageIncomeSheep} onChange={(e) => setSelectedAverageIncomeSheep(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="veterinary">Nearby Veterinary Hospital</label>
                <input type="text" id="Average/Income" name="Average/Income" value={selectedNearbyVeterinaryHospitalSheep} onChange={(e) => setSelectedNearbyVeterinaryHospitalSheep(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="disease">Any seasonal disease outbreak</label>
                <input type="text" id="disease" name="disease" value={selectedAnySeasonalDiseaseOutbreakSheep} onChange={(e) => setSelectedAnySeasonalDiseaseOutbreakSheep(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="treatmentmethod">Treatment Method Followed</label>
                <select id="treatmentmethod" name="treatmentmethod" value={selectedTreatmentMethodFollowedSheep} onChange={(e) => setSelectedTreatmentMethodFollowedSheep(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Hospital"> Hospital</option>
                </select>
              </div>
            </div>

          </div>

        )}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="livestockInsurancedetails">23. Live Stock Insurance Details</label><br></br>
            <div className="checkbox-group" value={selectedLiveStockInsuranceDetails} onChange={(e) => setSelectedLiveStockInsuranceDetails(e.target.value)}>
              <label>
                <input type="checkbox" id="cow" name="cow" checked={showFields.cow} onChange={handleCheckboxChange} /> Cow
              </label>
              <label>
                <input type="checkbox" id="buffalow" name="buffalow" checked={showFields.buffalow} onChange={handleCheckboxChange} /> Buffalo
              </label>
              <label>
                <input type="checkbox" id="goat" name="goat" checked={showFields.goat} onChange={handleCheckboxChange} /> Goat
              </label>

              <label>
                <input type="checkbox" id="sheep" name="sheep" checked={showFields.sheep} onChange={handleCheckboxChange} /> Sheep
              </label>
              <label>
                <input type="checkbox" id="others" name="others" checked={showFields.others} onChange={handleCheckboxChange} /> Others
              </label>
            </div>
          </div>
        </div>

        <div className="form-row">
          {showFields.cow && (
            <div className="form-group">
              <label htmlFor="cow">Cow</label>
              <input type="text" id="cow" name="cow" placeholder="Number of Insured (2020)" value={selectedLiveStockInsuranceDetailsCow20} onChange={(e) => setSelectedLiveStockInsuranceDetailsCow20(e.target.value)} />
              <input type="text" id="cow" name="cow" placeholder="Number of Insured (2021)" value={selectedLiveStockInsuranceDetailsCow21} onChange={(e) => setSelectedLiveStockInsuranceDetailsCow21(e.target.value)} />
              <input type="text" id="cow" name="cow" placeholder="Number of Insured (2022)" value={selectedLiveStockInsuranceDetailsCow22} onChange={(e) => setSelectedLiveStockInsuranceDetailsCow22(e.target.value)} />
              <input type="text" id="cow" name="cow" placeholder="Number of Insured (2023)" value={selectedLiveStockInsuranceDetailsCow23} onChange={(e) => setSelectedLiveStockInsuranceDetailsCow23(e.target.value)} />
              <input type="text" id="cow" name="cow" placeholder="Number of Insured (2024)" value={selectedLiveStockInsuranceDetailsCow24} onChange={(e) => setSelectedLiveStockInsuranceDetailsCow24(e.target.value)} />
            </div>
          )}

          {showFields.buffalow && (
            <div className="form-group">
              <label htmlFor="buffalo">Buffalow</label>
              <input type="text" id="buffalo" name="buffalo" placeholder="Number of Insured (2020)" value={selectedLiveStockInsuranceDetailsbuffalo20} onChange={(e) => setSelectedLiveStockInsuranceDetailsbuffalo20(e.target.value)} />
              <input type="text" id="buffalo" name="buffalo" placeholder="Number of Insured (2021)" value={selectedLiveStockInsuranceDetailsbuffalo21} onChange={(e) => setSelectedLiveStockInsuranceDetailsbuffalo21(e.target.value)} />
              <input type="text" id="buffalo" name="buffalo" placeholder="Number of Insured (2022)" value={selectedLiveStockInsuranceDetailsbuffalo22} onChange={(e) => setSelectedLiveStockInsuranceDetailsbuffalo22(e.target.value)} />
              <input type="text" id="buffalo" name="buffalo" placeholder="Number of Insured (2023)" value={selectedLiveStockInsuranceDetailsbuffalo23} onChange={(e) => setSelectedLiveStockInsuranceDetailsbuffalo23(e.target.value)} />
              <input type="text" id="buffalo" name="buffalo" placeholder="Number of Insured (2024)" value={selectedLiveStockInsuranceDetailsbuffalo24} onChange={(e) => setSelectedLiveStockInsuranceDetailsbuffalo24(e.target.value)} />
            </div>
          )}

          {showFields.goat && (
            <div className="form-group" >
              <label htmlFor="goat">Goat</label>
              <input type="text" id="goat" name="goat" placeholder="Number of Insured (2020)" value={selectedLiveStockInsuranceDetailsgoat20} onChange={(e) => setSelectedLiveStockInsuranceDetailsgoat20(e.target.value)} />
              <input type="text" id="goat" name="goat" placeholder="Number of Insured (2021)" value={selectedLiveStockInsuranceDetailsgoat21} onChange={(e) => setSelectedLiveStockInsuranceDetailsgoat21(e.target.value)} />
              <input type="text" id="goat" name="goat" placeholder="Number of Insured (2022)" value={selectedLiveStockInsuranceDetailsgoat22} onChange={(e) => setSelectedLiveStockInsuranceDetailsgoat22(e.target.value)} />
              <input type="text" id="goat" name="goat" placeholder="Number of Insured (2023)" value={selectedLiveStockInsuranceDetailsgoat23} onChange={(e) => setSelectedLiveStockInsuranceDetailsgoat23(e.target.value)} />
              <input type="text" id="goat" name="goat" placeholder="Number of Insured (2024)" value={selectedLiveStockInsuranceDetailsgoat24} onChange={(e) => setSelectedLiveStockInsuranceDetailsgoat24(e.target.value)} />
            </div>
          )}

          {showFields.sheep && (
            <div className="form-group" >
              <label htmlFor="sheep">Sheep</label >
              <input type="text" id="sheep" name="sheep" placeholder="Number of Insured (2020)" value={selectedLiveStockInsuranceDetailssheep20} onChange={(e) => setSelectedLiveStockInsuranceDetailssheep20(e.target.value)} />
              <input type="text" id="sheep" name="sheep" placeholder="Number of Insured (2021)" value={selectedLiveStockInsuranceDetailssheep21} onChange={(e) => setSelectedLiveStockInsuranceDetailssheep21(e.target.value)} />
              <input type="text" id="sheep" name="sheep" placeholder="Number of Insured (2022)" value={selectedLiveStockInsuranceDetailssheep22} onChange={(e) => setSelectedLiveStockInsuranceDetailssheep22(e.target.value)} />
              <input type="text" id="sheep" name="sheep" placeholder="Number of Insured (2023)" value={selectedLiveStockInsuranceDetailssheep23} onChange={(e) => setSelectedLiveStockInsuranceDetailssheep23(e.target.value)} />
              <input type="text" id="sheep" name="sheep" placeholder="Number of Insured (2024)" value={selectedLiveStockInsuranceDetailssheep24} onChange={(e) => setSelectedLiveStockInsuranceDetailssheep24(e.target.value)} />
            </div>
          )}

          {showFields.others && (

            <div className="form-group" >
              <label htmlFor="others">Others</label>
              <input type="text" id="others" name="others" placeholder="Number of Insured (2020)" value={selectedLiveStockInsuranceDetailsothers20} onChange={(e) => setSelectedLiveStockInsuranceDetailsothers20(e.target.value)} />
              <input type="text" id="others" name="others" placeholder="Number of Insured (2021)" value={selectedLiveStockInsuranceDetailsothers21} onChange={(e) => setSelectedLiveStockInsuranceDetailsothers21(e.target.value)} />
              <input type="text" id="others" name="others" placeholder="Number of Insured (2022)" value={selectedLiveStockInsuranceDetailsothers22} onChange={(e) => setSelectedLiveStockInsuranceDetailsothers22(e.target.value)} />
              <input type="text" id="others" name="others" placeholder="Number of Insured (2023)" value={selectedLiveStockInsuranceDetailsothers23} onChange={(e) => setSelectedLiveStockInsuranceDetailsothers23(e.target.value)} />
              <input type="text" id="others" name="others" placeholder="Number of Insured (2024)" value={selectedLiveStockInsuranceDetailsothers24} onChange={(e) => setSelectedLiveStockInsuranceDetailsothers24(e.target.value)} />
            </div>
          )}
        </div>
        {/* <div className="center">
          <button
            type="button" 
            onClick={handleFormSubmit} className="button" style={{   backgroundColor: '#4CAF50', 
            border: 'none', 
            color: 'white', 
            padding: '15px 32px', 
            textAlign: 'center', 
            textDecoration: 'none', 
            display: 'inline-block', 
            fontSize: '16px', 
            margin: '4px 2px', 
            transitionDuration: '0.10s', 
            cursor: 'pointer', 
            borderRadius: '8px', 
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
            marginBottom: '25px',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'} // Change color on hover
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'} // Restore original color on hover out
        >Add Information</button>
          {isSubmitted && <p>{message}</p>}
        </div> */}
        <button
        type="button"
        onClick={handleOpenModal}
        className="button"
        style={{
          backgroundColor: '#4CAF50', 
          border: 'none', 
          color: 'white', 
          padding: '15px 32px', 
          textAlign: 'center', 
          textDecoration: 'none', 
          display: 'block', // Changed from 'inline-block' to 'block'
          fontSize: '16px', 
          margin: '25px auto', // Changed to 'auto' to center horizontally
          transitionDuration: '0.10s', 
          cursor: 'pointer', 
          borderRadius: '8px', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'} 
        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >ADD INFORMATION</button>
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />  <div style={{ textAlign: 'center' }}>
      {/* Your form elements */}
      <button style={{ backgroundColor: '#0096FF', border: 'none', 
          color: 'white', 
          padding: '15px 32px', 
          textAlign: 'center', 
          textDecoration: 'none', 
          display: 'block', 
          fontSize: '16px', 
          margin: '25px auto', 
          transitionDuration: '0.10s', 
          cursor: 'pointer', 
          borderRadius: '8px',  }} onClick={handleViewReport}>View Report</button>
    </div>
    
        <footer style={{ backgroundColor: '#E8F5E9', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ margin: 0 }}>Copyright &copy; {year.getFullYear()} Dhan</p>
          <div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
              <a href="https://www.dhan.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a>
              <li> 
           <div>
                <span onClick={toggleAddress}>Address</span>
                {showAddress && (
                  <div>
                    <p className="address-line">DHAN Foundation</p>
                    <p className="address-line">1A, Vaidyanathapuram East</p>
                    <p className="address-line">Kennet Cross Road</p>
                    <p className="address-line">Madurai - 625016</p>
                    <p className="address-line">Tamil Nadu, INDIA</p>
                  </div>
                )}

              </div></li>
              <li> <div>
                <span onClick={handleContactClick}>Contact Us</span>
                {showContact && (
                  <div>
                    <p className="contact-link"><a href="mailto:dhanfoundation@dhan.org"style={{ color: 'blue' }}>dhanfoundation@dhan.org</a></p>
                    <p className="contact-link"><a href="tel:+91-452-2302500"style={{ color: 'blue' }}>+91-452-2302500 , 2302598</a></p>
                  </div>
                )}

              </div></li>


              <li> <div className="follow-us">
                <span className="follow-label" onClick={handleFollowClick}>Follow Us</span>
                {showLinks && (
                  <ul className="follow-links"style={{position:"relative"}}>
                    <li><a href="https://www.facebook.com/DHAN-Foundation-2421738921387153//" target="_blank"rel="noreferrer">Facebook</a></li>
                    <li><a href="https://www.youtube.com/user/cfpdhan/" target="_blank"rel="noreferrer">Youtube</a></li>
                    <li><a href="https://twitter.com/foundationdhan/" target="_blank"rel="noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com/dhanfoundation/" target="_blank"rel="noreferrer">Instagram</a></li>
                  </ul>
                )}
              </div></li>
            </ul>
          </div>
        </footer>

      </div>
    </form>
  );
}

export default Form;