import React, { useState } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const items = {
  consumables: {},
  equipment: {
    weapons: {
      oneHanded: {
        rapier: {
          damage: {
            value: 6,
            label: '6',
          },
          speed: {
            value: 4,
            label: '4',
          },
        },
        longsword: {
          damage: {
            value: 8,
            label: '8',
          },
          speed: {
            value: 3,
            label: '3',
          },
        },
      },
      twoHanded: {
        damage: {},
        speed: {},
      },
    },
    armor: {
      helmet: {
        defense: {},
        weight: {},
      },
      chest: {
        defense: {},
        weight: {},
      },
      boots: {
        defense: {},
        weight: {},
      },
    },
  },
};

const Items = () => {
  const [weaponName, setWeaponName] = useState('');
  const [weaponDamage, setWeaponDamage] = useState(0);
  const [weaponSpeed, setWeaponSpeed] = useState(0);

  const submitForm = (e) => {
    e.preventDefault();
    const newWeapon = { weaponName, weaponDamage, weaponSpeed };
    console.log('newWeapon', newWeapon);
    alert(JSON.stringify(newWeapon));
  };

  return (
    <div>
      <Form onSubmit={submitForm}>
        <Row>
          <Col>
            <h1>New Weapon</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="weaponName">Weapon Name</Label>
              <Input
                value={weaponName}
                type="text"
                name="weaponName"
                id="weaponName"
                placeholder="longsword"
                onChange={(e) => {
                  setWeaponName(e.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="weaponDamage">Weapon Damages</Label>
              <Input
                value={weaponDamage}
                type="number"
                name="weaponDamage"
                id="weaponDamage"
                placeholder={1}
                max={100}
                min={0}
                onChange={(e) => {
                  setWeaponDamage(e.target.value);
                }}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="weaponSpeed">Weapon Speed</Label>
              <Input
                value={weaponSpeed}
                type="number"
                name="weaponSpeed"
                id="weaponSpeed"
                placeholder={3}
                max={100}
                min={0}
                onChange={(e) => {
                  setWeaponSpeed(e.target.value);
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="submit">Add Weapon</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <Row>
            <Col className="text-center">Rapier</Col>
            <Col className="text-center">Longsword</Col>
          </Row>
          <Row>
            <Col>Damage</Col>
            <Col>Speed</Col>
            <Col>Damage</Col>
            <Col>Speed</Col>
          </Row>
          <Row>
            <Col>{items.equipment.weapons.oneHanded.rapier.damage.label}</Col>
            <Col>{items.equipment.weapons.oneHanded.rapier.speed.label}</Col>
            <Col>{items.equipment.weapons.oneHanded.longsword.damage.label}</Col>
            <Col>{items.equipment.weapons.oneHanded.longsword.speed.label}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Items;
