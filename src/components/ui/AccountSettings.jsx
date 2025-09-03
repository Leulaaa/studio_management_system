import React, { useState } from 'react';
import ProfileAvatar from './ProfileAvatar';
import FormField from './FormField';
import PasswordField from './PasswordField';
import Button from './Button';
import Dropdown from './Dropdown';

const ethiopianRegions = [
  'Addis Ababa', 'Afar', 'Amhara', 'Benishangul-Gumuz', 'Dire Dawa',
  'Gambela', 'Harari', 'Oromia', 'Sidama', 'SNNP (Southern Nations)',
  'Somali', 'Tigray'
];

const ethiopianCities = {
  'Addis Ababa': ['Addis Ababa'],
  'Afar': ['Semera', 'Asaita', 'Awash', 'Dubti'],
  'Amhara': ['Bahir Dar', 'Gondar', 'Dessie', 'Debre Birhan', 'Kombolcha', 'Debre Markos'],
  'Benishangul-Gumuz': ['Asosa', 'Metekel', 'Kamashi'],
  'Dire Dawa': ['Dire Dawa'],
  'Gambela': ['Gambela', 'Itang', 'Abobo'],
  'Harari': ['Harar'],
  'Oromia': ['Adama', 'Jimma', 'Bishoftu', 'Shashamane', 'Hawassa', 'Nekemte', 'Ambo', 'Sebeta'],
  'Sidama': ['Hawassa', 'Yirgalem', 'Dilla'],
  'SNNP (Southern Nations)': ['Wolaita Sodo', 'Arba Minch', 'Jinka', 'Mizan Teferi'],
  'Somali': ['Jijiga', 'Gode', 'Kebri Dehar', 'Degahbur'],
  'Tigray': ['Mekelle', 'Axum', 'Adigrat', 'Shire']
};

const AccountSettings = () => {
  const [profileData, setProfileData] = useState({
    displayName: 'Abebe',
    username: 'Display name',
    fullName: 'Abebe kebede',
    email: 'abebe.kebede@gmail.com',
    secondaryEmail: 'abebe12345@gmail.com',
    phoneNumber: '+1-202-555-0118'
  });

  const [paymentData, setPaymentData] = useState({
    firstName: 'Abebe',
    lastName: 'kebede',
    companyName: '',
    address: 'Road No.13/x, House no.1320/C, Flat No. 5D',
    country: 'Ethiopia',
    region: '',
    city: '',
    zipCode: '1000',
    email: 'abebe12345@gmail.com',
    phoneNumber: '+251-999-517-487'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handlePaymentChange = (field, value) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'region' ? { city: '' } : {}) // reset city if region changes
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl p-2 space-y-4 mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900">ACCOUNT SETTINGS</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile</h2>
        <div className="flex items-start space-x-6 w-full">
          <ProfileAvatar size="large" />
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Display name"
                value={profileData.displayName}
                onChange={(e) => handleProfileChange('displayName', e.target.value)}
              />
              <FormField
                label="Username"
                value={profileData.username}
                onChange={(e) => handleProfileChange('username', e.target.value)}
              />
              <FormField
                label="Full Name"
                value={profileData.fullName}
                onChange={(e) => handleProfileChange('fullName', e.target.value)}
              />
              <FormField
                label="Email"
                value={profileData.email}
                onChange={(e) => handleProfileChange('email', e.target.value)}
                type="email"
              />
              <FormField
                label="Secondary Email"
                value={profileData.secondaryEmail}
                onChange={(e) => handleProfileChange('secondaryEmail', e.target.value)}
                type="email"
              />
              <FormField
                label="Phone Number"
                value={profileData.phoneNumber}
                onChange={(e) => handleProfileChange('phoneNumber', e.target.value)}
                type="tel"
              />
            </div>
            <div className="flex justify-end">
              <Button>SAVE CHANGES</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Details Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">PAYMENT DETAILS</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="First Name"
              value={paymentData.firstName}
              onChange={(e) => handlePaymentChange('firstName', e.target.value)}
            />
            <FormField
              label="Last Name"
              value={paymentData.lastName}
              onChange={(e) => handlePaymentChange('lastName', e.target.value)}
            />
          </div>

          <FormField
            label="Company Name (Optional)"
            value={paymentData.companyName}
            onChange={(e) => handlePaymentChange('companyName', e.target.value)}
          />
          <FormField
            label="Address"
            value={paymentData.address}
            onChange={(e) => handlePaymentChange('address', e.target.value)}
          />
          <FormField
            label="Country"
            value={paymentData.country}
            onChange={(e) => handlePaymentChange('country', e.target.value)}
          />

          <Dropdown
            label="Region/State"
            value={paymentData.region}
            onChange={(value) => handlePaymentChange('region', value)}
            options={ethiopianRegions}
            placeholder="Select region..."
          />

          {/* City and Zip Code side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Dropdown
              label="City"
              value={paymentData.city}
              onChange={(value) => handlePaymentChange('city', value)}
              options={paymentData.region ? ethiopianCities[paymentData.region] || [] : []}
              placeholder="Select city..."
            />
            <FormField
              label="Zip Code"
              value={paymentData.zipCode}
              onChange={(e) => handlePaymentChange('zipCode', e.target.value)}
            />
          </div>

          <FormField
            label="Email"
            value={paymentData.email}
            onChange={(e) => handlePaymentChange('email', e.target.value)}
            type="email"
          />
          <FormField
            label="Phone Number"
            value={paymentData.phoneNumber}
            onChange={(e) => handlePaymentChange('phoneNumber', e.target.value)}
            type="tel"
          />

          <div className="flex justify-end">
            <Button>SAVE CHANGES</Button>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">CHANGE PASSWORD</h2>
        <div className="space-y-6">
          <PasswordField
            label="Current Password"
            value={passwordData.currentPassword}
            onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
          />
          <PasswordField
            label="New Password"
            value={passwordData.newPassword}
            onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
            placeholder="8+ characters"
          />
          <PasswordField
            label="Confirm Password"
            value={passwordData.confirmPassword}
            onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
          />
          <div className="flex justify-end">
            <Button>CHANGE PASSWORD</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
