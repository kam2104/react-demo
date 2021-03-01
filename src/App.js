import React, { useState } from "react"
import {
  Form,
  Button,
  Collapse,
  Progress,
  Modal,
  Input,
  Typography,
  message,
} from "antd"
import { PlusOutlined, CloseOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"

const { Text } = Typography

function App() {
  const [showAddContent, setShowAddContent] = useState(false)
  const [showAddCriteria, setShowAddCriteria] = useState(false)
  const [active, setActive] = useState(0)
  const [criteriaField, setCriteriaFeild] = useState("")
  const [criteria, setCriteria] = useState([
    "Pricing",
    "Features",
    "Customer Case Studies",
  ])
  const [content, setContent] = useState([
    {
      name: "Dropbox",
      score: 6,
      description: "Dropbox is a cloud based file management",
      header: "Total funding $170m",
      fundDetail1: "2005",
      fundDetail2: "DFG, scale Venture Partners",
      fundDetail3: "Aeron Levie, Dylon Smith",
      Pricing: "www.dropbox.com/pricing",
      Features: "5 different features present",
      "Customer Case Studies": "4 Customer case studies found",
    },
    {
      name: "Google Drive",
      score: 4.5,
      description: "Store, sync and share files easily",
      header: "Total funding $36.1m",
      fundDetail1: "2007",
      fundDetail2: "Sequia, Kleiner, Index Ventures",
      fundDetail3: "Arash Ferdoswi",
      Pricing: "www.drive.google.com/pricing",
      Features: "4 different features present",
      "Customer Case Studies": "6 Customer case studies found",
    },
    {
      name: "SalesForce",
      score: 6.2,
      description: "SalesForce is a cloud based file storage",
      header: "Total funding $756.1m",
      fundDetail1: "2002",
      fundDetail2: "Sequia, Larry Page",
      fundDetail3: "Kleiner, Sergey Bin",
      Pricing: "www.salesforce.com/pricing",
      Features: "6 different features present",
      "Customer Case Studies": "1 Customer case studies found",
    },
  ])
  const [name, setName] = useState("")
  const [score, setScore] = useState()
  const [description, setDescription] = useState("")
  const [header, setHeader] = useState("")
  const [fundDetail1, setFundDetail1] = useState("")
  const [fundDetail2, setFundDetail2] = useState("")
  const [fundDetail3, setFundDetail3] = useState("")
  const [pricing, setPricing] = useState("")
  const [features, setFeatures] = useState("")
  const [customerCase, setCustomerCase] = useState("")

  const handleChange = () => {
    if (active == 0) {
      setActive(1)
    } else {
      setActive(0)
    }
  }

  const removeCriteria = (indexToRemove) => {
    const newCriteria = criteria.filter((item, index) => {
      if (index == indexToRemove) {
        return false
      } else {
        return true
      }
    })
    setCriteria(newCriteria)
  }

  const removeContent = (indexToRemove) => {
    const newContent = content.filter((item, index) => {
      if (index == indexToRemove) {
        return false
      } else {
        return true
      }
    })
    setContent(newContent)
  }

  const addContentClicked = () => {
    setName("")
    setScore(0)
    setDescription("")
    setHeader("")
    setFundDetail1("")
    setFundDetail2("")
    setFundDetail3("")
    setPricing("")
    setFeatures("")
    setCustomerCase("")
    setShowAddContent(true)
  }

  const addContent = () => {
    if (!name || !description) {
      message.error("Name and description are important to proceed")
      return
    }
    const obj = {
      name,
      score: parseInt(score),
      description,
      header: "Total funding $" + header + "m",
      fundDetail1,
      fundDetail2,
      fundDetail3,
      Pricing: pricing,
      Features: features + " different features present",
      "Customer Case Studies": customerCase + " Customer case studies found",
    }
    content.push(obj)
    setShowAddContent(false)
  }

  const addRowModal = () => {
    
    setShowAddCriteria(true)
  }

  const addCriteria = ()=>{
    if (!criteriaField) {
      message.error("Input field cannot be empty. Please fill to proceed.")
      return
    }

    criteria.push(criteriaField)
    setCriteriaFeild("")
    setShowAddCriteria(false)
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 15,
          marginLeft: "20%",
        }}
      >
        <Button style={{ width: "80%" }} onClick={addRowModal}>
          ADD CRITERIA
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 15,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
            width: "19%",
            minWidth: 300,
          }}
        >
          {content.length == 4 ? (
            <div
              style={{
                border: "1px solid #E4E4E5",
                display: "flex",
                flexDirection: "column",
                padding: 19,
              }}
            >
              <Text>
                Note: To add more vendors to compare, you need to first remove
                one or more vendors. At a time maximum 4 vendors are allowed to
                compare.
              </Text>
            </div>
          ) : (
            <div
              style={{
                border: "1px solid #E4E4E5",
                display: "flex",
                flexDirection: "column",
                padding: 37.5,
              }}
            >
              <Button
                onClick={addContentClicked}
                type="primary"
                style={{
                  backgroundColor: "#34CC77",
                  borderColor: "#34CC77",
                  margin: "auto",
                }}
                shape="circle"
                icon={<PlusOutlined />}
              />
              <h5
                onClick={addContentClicked}
                style={{ cursor: "pointer", color: "#62B8F5", margin: "auto" }}
              >
                Add a New Vendor
              </h5>
            </div>
          )}
          <div
            style={{
              border: "1px solid #E4E4E5",
              padding: 30,
              textAlign: "center",
            }}
          >
            <h4 style={{ cursor: "pointer", margin: "auto" }}>Overall Score</h4>
          </div>
          <div
            style={{
              border: "1px solid #E4E4E5",
              padding: 30,
              textAlign: "center",
            }}
          >
            <h4 style={{ cursor: "pointer", margin: "auto" }}>
              Product Description
            </h4>
          </div>
          <div style={{ border: "1px solid #E4E4E5" }}>
            <Collapse
              activeKey={active}
              onChange={handleChange}
              bordered={false}
            >
              <Collapse.Panel key={1} bordered={false} header="Funding History">
                <div
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #E3E3E4",
                    padding: 5,
                  }}
                >
                  <h5>Founded</h5>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #E3E3E4",
                    padding: 5,
                  }}
                >
                  <h5>Key Investors</h5>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #E3E3E4",
                    padding: 5,
                  }}
                >
                  <h5>Founders</h5>
                </div>
              </Collapse.Panel>
            </Collapse>
          </div>
          {criteria.map((item, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid #E4E4E5",
                  padding: 30,
                  textAlign: "center",
                }}
              >
                <h4 style={{ cursor: "pointer", margin: "auto" }}>{item}</h4>
                <Button
                  onClick={() => removeCriteria(index)}
                  size="small"
                  type="danger"
                  style={{ marginLeft: "auto", marginTop: "auto" }}
                  shape="circle"
                  icon={<CloseOutlined />}
                />
              </div>
            )
          })}
        </div>

        {content.map((item, index) => {
          return (
            <ContentColumn
              collapseClick={handleChange}
              removeContent={removeContent}
              index={index}
              active={active}
              criteria={criteria}
              obj={item}
            />
          )
        })}

        <Modal
          title="Add New Vendor"
          style={{ padding: 20 }}
          visible={showAddContent}
          footer={null}
          onCancel={() => setShowAddContent(false)}
        >
          <Form>
            <Form.Item>
              <Input
                value={name}
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                value={score}
                type="number"
                placeholder="Score"
                onChange={(e) => {
                  setScore(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                value={description}
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                value={header}
                type="number"
                placeholder="Total Funding"
                onChange={(e) => {
                  setHeader(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                value={fundDetail1}
                placeholder="Founded"
                onChange={(e) => {
                  setFundDetail1(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                value={fundDetail2}
                placeholder="Key Investors"
                onChange={(e) => {
                  setFundDetail2(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                value={fundDetail3}
                placeholder="Founders"
                onChange={(e) => {
                  setFundDetail3(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                value={pricing}
                placeholder="Pricing"
                onChange={(e) => {
                  setPricing(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                value={features}
                type="number"
                placeholder="Number of Features"
                onChange={(e) => {
                  setFeatures(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                value={customerCase}
                type="number"
                placeholder="Number of Customer Case Studies"
                onChange={(e) => {
                  setCustomerCase(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item>
              <Button
                style={{ margin: 10 }}
                type="primary"
                onClick={addContent}
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Add New Criteria"
          style={{ padding: 20 }}
          visible={showAddCriteria}
          footer={null}
          onCancel={() => setShowAddCriteria(false)}
        >
          <Form>
            <Form.Item>
              <Input
                value={criteriaField}
                placeholder="Name"
                onChange={(e) => {
                  setCriteriaFeild(e.target.value)
                }}
              ></Input>
            </Form.Item>

            <Form.Item>
              <Button
                style={{ margin: 10 }}
                type="primary"
                onClick={addCriteria}
              >
                Add Criteria
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  )
}

const ContentColumn = (props) => {
  let strokeColor = ""
  let fillColor = ""

  if (props.obj.score <= 6) {
    strokeColor = "#FFC138"
    fillColor = "#FFF3D9"
  }
  if (props.obj.score <= 4.5) {
    strokeColor = "#D84B3E"
    fillColor = "#FEDFE0"
  }
  if (props.obj.score > 6) {
    strokeColor = "#5CB464"
    fillColor = "#E7F2E3"
  }

  return (
    <div
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        minWidth: 300,
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #E3E3E4",
          padding: 5,
        }}
      >
        <CloseOutlined
          style={{ color: "#c9c9c9", cursor: "pointer", alignSelf: "flex-end" }}
          onClick={() => props.removeContent(props.index)}
        />
        <img height="77" width="75" src="/logo.png" />
        <h5>{props.obj.name}</h5>
      </div>
      <div
        style={{
          alignItems: "center",
          border: "1px solid #E3E3E4",
          padding: 10,
        }}
      >
        <div
          style={{
            display: "inline-block",
            borderRadius: 100,
            backgroundColor: fillColor,
            marginLeft: "40%",
          }}
        >
          <Progress
            strokeColor={strokeColor}
            format={(percent) => {
              return percent / 10
            }}
            type="circle"
            percent={props.obj.score * 10}
            width={61}
          />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          border: "1px solid #E3E3E4",
          padding: 30,
        }}
      >
        <h5>{props.obj.description}</h5>
      </div>
      <div style={{ textAlign: "center", border: "1px solid #E3E3E4" }}>
        <Collapse
          onChange={props.collapseClick}
          activeKey={props.active}
          bordered={false}
        >
          <Collapse.Panel
            key={1}
            showArrow={false}
            bordered={false}
            header={props.obj.header}
          >
            <div
              style={{
                textAlign: "center",
                borderBottom: "1px solid #E3E3E4",
                padding: 5,
              }}
            >
              <h5>{props.obj.fundDetail1}</h5>
            </div>
            <div
              style={{
                textAlign: "center",
                borderBottom: "1px solid #E3E3E4",
                padding: 5,
              }}
            >
              <h5>{props.obj.fundDetail2}</h5>
            </div>
            <div
              style={{
                textAlign: "center",
                borderBottom: "1px solid #E3E3E4",
                padding: 5,
              }}
            >
              <h5>{props.obj.fundDetail3}</h5>
            </div>
          </Collapse.Panel>
        </Collapse>
      </div>
      {props.criteria.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              border: "1px solid #E3E3E4",
              padding: 30,
            }}
          >
            <h5>{props.obj[item]}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default App
