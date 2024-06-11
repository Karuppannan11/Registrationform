import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { Table } from 'antd';
import axios from 'axios';

const DragIndexContext = createContext({
  active: -1,
  over: -1,
});

const dragActiveStyle = (dragState, id) => {
  const { active, over, direction } = dragState;
  let style = {};
  if (active && active === id) {
    style = {
      backgroundColor: 'gray',
      opacity: 0.5,
    };
  } else if (over && id === over && active !== over) {
    style =
      direction === 'right'
        ? {
            borderRight: '1px dashed gray',
          }
        : {
            borderLeft: '1px dashed gray',
          };
  }
  return style;
};

const TableBodyCell = (props) => {
  const dragState = useContext(DragIndexContext);
  return (
    <td
      {...props}
      style={{
        ...props.style,
        ...dragActiveStyle(dragState, props.id),
      }}
    />
  );
};

const TableHeaderCell = (props) => {
  const dragState = useContext(DragIndexContext);
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: props.id,
  });
  const style = {
    ...props.style,
    cursor: 'move',
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
          userSelect: 'none',
        }
      : {}),
    ...dragActiveStyle(dragState, props.id),
  };
  return <th {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
};

const baseColumns = [
  { title: 'ID', dataIndex: 'id' },
  // { title: 'State', dataIndex: 'state' },
  { title: 'District', dataIndex: 'district' },
  { title: 'Location', dataIndex: 'location' },
  { title: 'Cluster', dataIndex: 'cluster' },
  { title: 'Group', dataIndex: 'grp' },
  { title: 'Member', dataIndex: 'mbr' },
//   { title: 'Door No', dataIndex: 'doorNo' },
//   { title: 'Street', dataIndex: 'street' },
//   { title: 'Aadhar Number', dataIndex: 'aadharNumber' },
  { title: 'Farmer Name', dataIndex: 'farmerName' },
//   { title: 'Spouse Name', dataIndex: 'spouseName' },
//   { title: 'Father Name', dataIndex: 'fatherName' },
//   { title: 'Date of Birth', dataIndex: 'datebirth' },
//   { title: 'Gender', dataIndex: 'gender' },
  { title: 'Farmer Mobile', dataIndex: 'farmerMobile' },
//   { title: 'Alternate Number', dataIndex: 'alternateNumber' },
//   { title: 'Member in FPO', dataIndex: 'isMemberinFPO' },
//   { title: 'Name of the FPO', dataIndex: 'nameoftheFPO' },
//   { title: 'Latitude', dataIndex: 'latitude' },
//   { title: 'Longitude', dataIndex: 'longitude' },
  { title: 'Irrigation Type', dataIndex: 'irrigationType' },
//   { title: 'Total Acres in Tankfed', dataIndex: 'totalAcresinTankfed' },
  { title: 'Area of Cultivation in Tankfed', dataIndex: 'areaofCultivationinTankfed' },
//   { title: 'Soil Type 1', dataIndex: 'soilType1' },
//   { title: 'Land Ownership 1', dataIndex: 'landownership1' },
//   { title: 'Cultivation Practice 1', dataIndex: 'cultivationpractice1' },
//   { title: 'Land Position 1', dataIndex: 'landposition1' },
//   { title: 'Land Type 1', dataIndex: 'landtype1' },
  { title: 'Crop Name 1', dataIndex: 'cropname1' },
  { title: 'Variety 1', dataIndex: 'variety1' },
  { title: 'Subvariety 1', dataIndex: 'subvariety1' },
//   { title: 'Season 1', dataIndex: 'season1' },
//   { title: 'Fertilizer 1', dataIndex: 'fertilizer1' },
//   { title: 'Biofertilizer 1', dataIndex: 'biofertilizer1' },
  
  {                
    title: 'Last Year Yields 1',
    dataIndex: 'lastyearyields1',
    render: (yieldValue) => {
      if (typeof yieldValue !== 'undefined') {
        let category = '';
        if (typeof yieldValue !== 'undefined' && yieldValue !== '') {
          if (yieldValue < 2500) {
              category = 'Aspirant';
          } else if (yieldValue >= 2500 && yieldValue < 2600) {
              category = 'Performer';
          } else if (yieldValue >= 2600 && yieldValue < 2800) {
              category = 'Front Runner';
          } else if (yieldValue >= 2800) {
              category = 'Bench Marker';
          }
        }

        return (
          <>
            <span>{yieldValue}</span> {/* Original value */}
            <span>{category}</span> {/* Category based on condition */}
          </>
        );
      } else {    
        return null; // or handle the error in a different way
      }
    },
  },
  
  
//   { title: 'Rate of Sales 1', dataIndex: 'rateofsales1' },
//   { title: 'Availability of Machinery 1', dataIndex: 'availabilityofMachinery1' },
//   { title: 'Crop Insurance 1', dataIndex: 'cropInsurance1' },
//   { title: 'Total Acres in Rainfed', dataIndex: 'totalAcresinRainfed' },
  { title: 'Area of Cultivation in Rainfed', dataIndex: 'areaofCultivationinRainfed' },
  { title: 'Irrigation Type', dataIndex: 'irrigationtyperainfed' },

//   { title: 'Soil Type 2', dataIndex: 'soilType2' },
//   { title: 'Land Ownership 2', dataIndex: 'landownership2' },
//   { title: 'Cultivation Practice 2', dataIndex: 'cultivationpractice2' },
//   { title: 'Land Position 2', dataIndex: 'landposition2' },
//   { title: 'Land Type 2', dataIndex: 'landtype2' },
  { title: 'Crop Name 2', dataIndex: 'cropname2' },
  { title: 'Variety 2', dataIndex: 'variety2' },
  { title: 'Subvariety 2', dataIndex: 'subvariety2' },
//   { title: 'Season 2', dataIndex: 'season2' },
//   { title: 'Fertilizer 2', dataIndex: 'fertilizer2' },
//   { title: 'Biofertilizer 2', dataIndex: 'biofertilizer2' },
{
    title: 'Last Year Yields 2',
    dataIndex: 'lastyearyields2',
    render: (yieldValue) => {
      if (typeof yieldValue !== 'undefined') {
        let category = '';

        // Check if yieldValue is defined and not empty
        if (typeof yieldValue !== 'undefined' && yieldValue !== '') {
            if (yieldValue < 2500) {
                category = 'Aspirant';
            } else if (yieldValue >= 2500 && yieldValue < 2600) {
                category = 'Performer';
            } else if (yieldValue >= 2600 && yieldValue < 2800) {
                category = 'Front Runner';
            } else if (yieldValue >= 2800) {
                category = 'Bench Marker';
            }
        }
        
        // The category variable will be an empty string if yieldValue is undefined or empty
        console.log(category); // This is for debugging purposes, you can remove it if not needed
        
        return (
          <>
            <span>{yieldValue}</span> {/* Original value */}
            <span>{category}</span> {/* Category based on condition */}
          </>
        );
      } else {
        return null; // or handle the error in a different way
      }
    },
  },
  
//    { title: 'Rate of Sales 2', dataIndex: 'rateofsales2' },
//   { title: 'Availability of Machinery 2', dataIndex: 'availabilityofMachinery2' },
//   { title: 'Crop Insurance 2', dataIndex: 'cropInsurance2' },
//   { title: 'Total Acres in Borewell', dataIndex: 'totalAcresinBorewell' },
{ title: 'Irrigation Type', dataIndex: 'irrigationtypeborewell' },
  { title: 'Area of Cultivation in Borewell', dataIndex: 'areaofCultivationinBorewell' },
//   { title: 'Soil Type 3', dataIndex: 'soilType3' },
//   { title: 'Land Ownership 3', dataIndex: 'landownership3' },
//   { title: 'Cultivation Practice 3', dataIndex: 'cultivationpractice3' },
//   { title: 'Land Position 3', dataIndex: 'landposition3' },
//   { title: 'Land Type 3', dataIndex: 'landtype3' },
  { title: 'Crop Name 3', dataIndex: 'cropname3' },
  { title: 'Variety 3', dataIndex: 'variety3' },
  { title: 'Subvariety 3', dataIndex: 'subvariety3' },
//   { title: 'Season 3', dataIndex: 'season3' },
//   { title: 'Fertilizer 3', dataIndex: 'fertilizer3' },
//   { title: 'Biofertilizer 3', dataIndex: 'biofertilizer3' },
{
    title: 'Last Year Yields 3',
    dataIndex: 'lastyearyields3',
    render: (yieldValue) => {
      let category = '';

      // Check if yieldValue is defined and not empty
      if (typeof yieldValue !== 'undefined' && yieldValue !== '') {
          if (yieldValue < 2500) {
              category = 'Aspirant';
          } else if (yieldValue >= 2500 && yieldValue < 2600) {
              category = 'Performer';
          } else if (yieldValue >= 2600 && yieldValue < 2800) {
              category = 'Front Runner';
          } else if (yieldValue >= 2800) {
              category = 'Bench Marker';
          }
      
      
      // The category variable will be an empty string if yieldValue is undefined or empty
      console.log(category); // This is for debugging purposes, you can remove it if not needed
      
        return (
          <>
            <span>{yieldValue}</span> {/* Original value */}
            <span>{category}</span> {/* Category based on condition */}
          </>
        );
      } else {
        return null; // or handle the error in a different way
      }
    },
  },
  
//    { title: 'Rate of Sales 3', dataIndex: 'rateofsales3' },
//   { title: 'Availability of Machinery 3', dataIndex: 'availabilityofMachinery3' },
//   { title: 'Crop Insurance 3', dataIndex: 'cropInsurance3' },
//   { title: 'Total Acres in Drip/OpenWell/Canal Irrigation', dataIndex: 'totalAcresinDripOpenWellCanalIrrigation' },
  { title: 'Area of Cultivation in Drip/OpenWell/Canal Irrigation', dataIndex: 'areaofCultivationinDripOpenWellCanalIrrigation' },
{ title: 'Irrigation Type', dataIndex: 'irrigationtypedrip' },

//   { title: 'Soil Type', dataIndex: 'soilType' },
//   { title: 'Land Ownership', dataIndex: 'landownership' },
//   { title: 'Cultivation Practice', dataIndex: 'cultivationpractice' },
//   { title: 'Land Position', dataIndex: 'landposition' },
//   { title: 'Land Type', dataIndex: 'landtype' },
  { title: 'Crop Name4', dataIndex: 'cropname' },
  { title: 'Variety4', dataIndex: 'variety' },
  { title: 'Subvariety4', dataIndex: 'subvariety' },
//   { title: 'Season', dataIndex: 'season' },
//   { title: 'Fertilizer', dataIndex: 'fertilizer' },
//   { title: 'Biofertilizer', dataIndex: 'biofertilizer' },
{
    title: 'Last Year Yields4 ',
    dataIndex: 'lastyearyields',
    render: (yieldValue) => {
      if (typeof yieldValue !== 'undefined') {
        let category = '';

        // Check if yieldValue is defined and not empty
        if (typeof yieldValue !== 'undefined' && yieldValue !== '') {
            if (yieldValue < 2500) {
                category = 'Aspirant';
            } else if (yieldValue >= 2500 && yieldValue < 2600) {
                category = 'Performer';
            } else if (yieldValue >= 2600 && yieldValue < 2800) {
                category = 'Front Runner';
            } else if (yieldValue >= 2800) {
                category = 'Bench Marker';
            }
        }
        
        // The category variable will be an empty string if yieldValue is undefined or empty
        console.log(category); // This is for debugging purposes, you can remove it if not needed
        
        return (
          <>
            <span>{yieldValue}</span> {/* Original value */}
            <span>{category}</span> {/* Category based on condition */}
          </>
        );
      } else {
        return null; // or handle the error in a different way
      }
    },
  },
  
//    { title: 'Rate of Sales', dataIndex: 'rateofsales' },
//   { title: 'Availability of Machinery', dataIndex: 'availabilityofMachinery' },
//   { title: 'Crop Insurance', dataIndex: 'cropInsurance' },
//   { title: 'Live Stock Details', dataIndex: 'liveStockDetails' },
//   { title: 'Livestock Buffalow', dataIndex: 'Livestockbuffalow' },
//   { title: 'Livestock Goat', dataIndex: 'Livestockgoat' },
//   { title: 'Livestock Sheep', dataIndex: 'Livestocksheep' },
//   { title: 'No of Livestock Cow', dataIndex: 'NoofLivestockCow' },
//   { title: 'Variety Bread Cow', dataIndex: 'VarietyBreadCow' },
//   { title: 'Feeding Type Cow', dataIndex: 'FeedingTypeCow' },
//   { title: 'Whether Fodder Cultivated Cow', dataIndex: 'WhetherFodderCultivatedCow' },
//   { title: 'No of Milk Yielding Animal Cow', dataIndex: 'NoofMilkYieldingAnimalCow' },
//   { title: 'Milk Yield Day Animal Cow', dataIndex: 'MilkYieldDayAnimalCow' },
//   { title: 'Frequency of Sales Cow', dataIndex: 'FrequencyofSalesCow' },
//   { title: 'Average Income Cow', dataIndex: 'AverageIncomeCow' },
//   { title: 'Nearby Veterinary Hospital Cow', dataIndex: 'NearbyVeterinaryHospitalCow' },
//   { title: 'Any Seasonal Disease Outbreak Cow', dataIndex: 'AnyseasonaldiseaseoutbreakCow' },
//   { title: 'Treatment Method Followed Cow', dataIndex: 'TreatmentMethodFollowedCow' },
//   { title: 'No of Livestock Buffalow', dataIndex: 'NoofLivestockBuffalow' },
//   { title: 'Variety Bread Buffalow', dataIndex: 'VarietyBreadBuffalow' },
//   { title: 'Feeding Type Buffalow', dataIndex: 'FeedingTypeBuffalow' },
//   { title: 'Whether Fodder Cultivated Buffalow', dataIndex: 'WhetherFodderCultivatedBuffalow' },
//   { title: 'No of Milk Yielding Animal Buffalow', dataIndex: 'NoofMilkYieldingAnimalBuffalow' },
//   { title: 'Milk Yield Day Animal Buffalow', dataIndex: 'MilkYieldDayAnimalBuffalow' },
//   { title: 'Frequency of Sales Buffalow', dataIndex: 'FrequencyofSalesBuffalow' },
//   { title: 'Average Income Buffalow', dataIndex: 'AverageIncomeBuffalow' },
//   { title: 'Nearby Veterinary Hospital Buffalow', dataIndex: 'NearbyVeterinaryHospitalBuffalow' },
//   { title: 'Any Seasonal Disease Outbreak Buffalow', dataIndex: 'AnyseasonaldiseaseoutbreakBuffalow' },
//   { title: 'Treatment Method Followed Buffalow', dataIndex: 'TreatmentMethodFollowedBuffalow' },
//   { title: 'No of Livestock Goat', dataIndex: 'NoofLivestockGoat' },
//   { title: 'Variety Bread Goat', dataIndex: 'VarietyBreadGoat' },
//   { title: 'Feeding Type Goat', dataIndex: 'FeedingTypeGoat' },
//   { title: 'Whether Fodder Cultivated Goat', dataIndex: 'WhetherFodderCultivatedGoat' },
//   { title: 'No of Milk Yielding Animal Goat', dataIndex: 'NoofMilkYieldingAnimalGoat' },
//   { title: 'Milk Yield Day Animal Goat', dataIndex: 'MilkYieldDayAnimalGoat' },
//   { title: 'Frequency of Sales Goat', dataIndex: 'FrequencyofSalesGoat' },
//   { title: 'Average Income Goat', dataIndex: 'AverageIncomeGoat' },
//   { title: 'Nearby Veterinary Hospital Goat', dataIndex: 'NearbyVeterinaryHospitalGoat' },
//   { title: 'Any Seasonal Disease Outbreak Goat', dataIndex: 'AnyseasonaldiseaseoutbreakGoat' },
//   { title: 'Treatment Method Followed Goat', dataIndex: 'TreatmentMethodFollowedGoat' },
//   { title: 'No of Livestock Sheep', dataIndex: 'NoofLivestockSheep' },
//   { title: 'Variety Bread Sheep', dataIndex: 'VarietyBreadSheep' },
//   { title: 'Feeding Type Sheep', dataIndex: 'FeedingTypeSheep' },
//   { title: 'Whether Fodder Cultivated Sheep', dataIndex: 'WhetherFodderCultivatedSheep' },
//   { title: 'No of Milk Yielding Animal Sheep', dataIndex: 'NoofMilkYieldingAnimalSheep' },
//   { title: 'Milk Yield Day Animal Sheep', dataIndex: 'MilkYieldDayAnimalSheep' },
//   { title: 'Frequency of Sales Sheep', dataIndex: 'FrequencyofSalesSheep' },
//   { title: 'Average Income Sheep', dataIndex: 'AverageIncomeSheep' },
//   { title: 'Nearby Veterinary Hospital Sheep', dataIndex: 'NearbyVeterinaryHospitalSheep' },
//   { title: 'Any Seasonal Disease Outbreak Sheep', dataIndex: 'AnyseasonaldiseaseoutbreakSheep' },
//   { title: 'Treatment Method Followed Sheep', dataIndex: 'TreatmentMethodFollowedSheep' },
//   { title: 'Live Stock Insurance Details', dataIndex: 'LiveStockInsuranceDetails' },
//   { title: 'Live Stock Insurance Details Cow 20', dataIndex: 'LiveStockInsuranceDetailsCow20' },
//   { title: 'Live Stock Insurance Details Cow 21', dataIndex: 'LiveStockInsuranceDetailsCow21' },
//   { title: 'Live Stock Insurance Details Cow 22', dataIndex: 'LiveStockInsuranceDetailsCow22' },
//   { title: 'Live Stock Insurance Details Cow 23', dataIndex: 'LiveStockInsuranceDetailsCow23' },
//   { title: 'Live Stock Insurance Details Cow 24', dataIndex: 'LiveStockInsuranceDetailsCow24' },
//   { title: 'Live Stock Insurance Details Buffalow 20', dataIndex: 'LiveStockInsuranceDetailsbuffalo20' },
//   { title: 'Live Stock Insurance Details Buffalow 21', dataIndex: 'LiveStockInsuranceDetailsbuffalo21' },
//   { title: 'Live Stock Insurance Details Buffalow 22', dataIndex: 'LiveStockInsuranceDetailsbuffalo22' },
//   { title: 'Live Stock Insurance Details Buffalow 23', dataIndex: 'LiveStockInsuranceDetailsbuffalo23' },
//   { title: 'Live Stock Insurance Details Buffalow 24', dataIndex: 'LiveStockInsuranceDetailsbuffalo24' },
//   { title: 'Live Stock Insurance Details Goat 20', dataIndex: 'LiveStockInsuranceDetailsgoat20' },
//   { title: 'Live Stock Insurance Details Goat 21', dataIndex: 'LiveStockInsuranceDetailsgoat21' },
//   { title: 'Live Stock Insurance Details Goat 22', dataIndex: 'LiveStockInsuranceDetailsgoat22' },
//   { title: 'Live Stock Insurance Details Goat 23', dataIndex: 'LiveStockInsuranceDetailsgoat23' },
//   { title: 'Live Stock Insurance Details Goat 24', dataIndex: 'LiveStockInsuranceDetailsgoat24' },
//   { title: 'Live Stock Insurance Details Sheep 20', dataIndex: 'LiveStockInsuranceDetailssheep20' },
//   { title: 'Live Stock Insurance Details Sheep 21', dataIndex: 'LiveStockInsuranceDetailssheep21' },
//   { title: 'Live Stock Insurance Details Sheep 22', dataIndex: 'LiveStockInsuranceDetailssheep22' },
//   { title: 'Live Stock Insurance Details Sheep 23', dataIndex: 'LiveStockInsuranceDetailssheep23' },
//   { title: 'Live Stock Insurance Details Sheep 24', dataIndex: 'LiveStockInsuranceDetailssheep24' },
//   { title: 'Live Stock Insurance Details Others 20', dataIndex: 'LiveStockInsuranceDetailsothers20' },
//   { title: 'Live Stock Insurance Details Others 21', dataIndex: 'LiveStockInsuranceDetailsothers21' },
//   { title: 'Live Stock Insurance Details Others 22', dataIndex: 'LiveStockInsuranceDetailsothers22' },
//   { title: 'Live Stock Insurance Details Others 23', dataIndex: 'LiveStockInsuranceDetailsothers23' },
//   { title: 'Live Stock Insurance Details Others 24', dataIndex: 'LiveStockInsuranceDetailsothers24' },
];

const DraggableHeader = ({ columns, setColumns, dragState }) => {
  const sensors = useSensors(useSensor(PointerSensor));
  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setColumns((prevColumns) => {
        const oldIndex = prevColumns.findIndex((col) => col.dataIndex === active.id);
        const newIndex = prevColumns.findIndex((col) => col.dataIndex === over.id);
        return arrayMove(prevColumns, oldIndex, newIndex);
      });
    }
  };
  return (
  
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToHorizontalAxis]}
    >
      <DragIndexContext.Provider value={dragState}>
        <SortableContext items={columns.map((col) => col.dataIndex)} strategy={horizontalListSortingStrategy}>
          <tr>
            {columns.map((col) => (
              <TableHeaderCell key={col.dataIndex} id={col.dataIndex}>
                {col.title}
              </TableHeaderCell>
            ))}
          </tr>
        </SortableContext>
      </DragIndexContext.Provider>
      <DragOverlay>
        {dragState.active && (
          <TableHeaderCell id={dragState.active} style={{ backgroundColor: 'white' }}>
            {columns.find((col) => col.dataIndex === dragState.active).title}
          </TableHeaderCell>
        )}
      </DragOverlay>
    </DndContext>
  );
};

const DraggableTable = ({ columns, data }) => {
  const [dragState, setDragState] = useState({ active: -1, over: -1, direction: 'right' });
  const [tableColumns, setTableColumns] = useState(columns);

  useEffect(() => {
    setTableColumns(columns);
  }, [columns]);

  const handleDragStart = (event) => {
    setDragState((prev) => ({ ...prev, active: event.active.id }));
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    const overIndex = tableColumns.findIndex((col) => col.dataIndex === over.id);
    const activeIndex = tableColumns.findIndex((col) => col.dataIndex === active.id);
    setDragState((prev) => ({
      ...prev,
      over: over.id,
      direction: activeIndex < overIndex ? 'right' : 'left',
    }));
  };

  const handleDragEnd = () => {
    setDragState({ active: -1, over: -1, direction: 'right' });
  };

  return (
    <DragIndexContext.Provider value={dragState}>
      <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
        <Table
          columns={tableColumns.map((col) => ({
            ...col,
            onCell: (record, rowIndex) => ({ id: `${col.dataIndex}-${rowIndex}` }),
          }))}
          dataSource={data}
          components={{
            body: {
              cell: TableBodyCell,
            },
            header: {
              row: (props) => (
                <DraggableHeader columns={tableColumns} setColumns={setTableColumns} dragState={dragState} {...props} />
              ),
            },
          }}
        />
      </DndContext>
    </DragIndexContext.Provider>
  );
};

const App = () => {
    const [dragIndex, setDragIndex] = useState({
      active: -1,
      over: -1,
    });
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState({
      Aspirant: 0,
      Performer: 0,
      'Front Runner': 0,
      'Bench Marker': 0,
    });
  
    useEffect(() => {
      axios.get('http://192.168.101.154:5000/api/user')
        .then(response => {
          const keys = Object.keys(response.data[0]);
          const newColumns = keys.map((key, index) => ({
            title: key,
            dataIndex: key,
            key: `${index}`,
            onHeaderCell: () => ({
              id: `${index}`,
            }),
            onCell: () => ({
              id: `${index}`,
            }),
            render: (yieldValue) => {
                if (['lastyearyields1', 'lastyearyields2', 'lastyearyields3', 'lastyearyields'].includes(key)) {
                  if (typeof yieldValue !== 'undefined') {
                    let category = '';
                    if (yieldValue < 2400) {
                      category = 'Aspirant';
                    } else if (yieldValue >= 2400 && yieldValue < 2600) {
                      category = 'Performer';
                    } else if (yieldValue >= 2600 && yieldValue < 2800) {
                      category = 'Front Runner';
                    } else {
                      category = 'Bench Marker';
                    }
                    setCategoryCounts((prevCounts) => ({
                      ...prevCounts,
                      [category]: prevCounts[category] + 1,
                    }));
                    return <span>{category}</span>;
                  } else {
                    return null; // or handle the error in a different way
                  }
                } else {
                  return yieldValue; // Render other fields as is
                }
              }
            }));
          setColumns(newColumns);
          setData(response.data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
 
       

    const sensors = useSensors(
      useSensor(PointerSensor, {
        activationConstraint: {
          distance: 1,
        },
      })
    );
  
    const onDragEnd = ({ active, over }) => {
      if (active.id !== over?.id) {
        setColumns((prevState) => {
          const activeIndex = prevState.findIndex((i) => i.key === active?.id);
          const overIndex = prevState.findIndex((i) => i.key === over?.id);
          return arrayMove(prevState, activeIndex, overIndex);
        });
      }
      setDragIndex({
        active: -1,
        over: -1,
      });
    };
  
    const onDragOver = ({ active, over }) => {
      const activeIndex = columns.findIndex((i) => i.key === active.id);
      const overIndex = columns.findIndex((i) => i.key === over?.id);
      setDragIndex({
        active: active.id,
        over: over?.id,
        direction: overIndex > activeIndex ? 'right' : 'left',
      });
    };
  
    return (
        
      <DndContext
        sensors={sensors}
        modifiers={[restrictToHorizontalAxis]}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        collisionDetection={closestCenter}
      >
        <SortableContext items={columns.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
          <DragIndexContext.Provider value={dragIndex}>
            
          {/* <div>
            <h2>Category Counts</h2>
            <ul>
                <li>Aspirant: {categoryCounts.Aspirant}</li>
                <li>Performer: {categoryCounts.Performer}</li>
                <li>Front Runner: {categoryCounts['Front Runner']}</li>
                <li>Bench Marker: {categoryCounts['Bench Marker']}</li>
            </ul>
        </div> */}
            <Table
              rowKey="id"
              columns={baseColumns}
              dataSource={data}
              components={{
                header: {
                  cell: TableHeaderCell,
                },
                body: {
                  cell: TableBodyCell,
                },
              }}
            />
          </DragIndexContext.Provider>
        </SortableContext>
      </DndContext>
    );
  };
  
  export default App;