import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const AccountSettingWrapper = styled.div`
  padding: 60px 0;
  @media (max-width: 767px) {
    padding: 30px 0;
  }
`;

export const AccountSidebar = styled.aside`
  border-radius: 6px;
  background-color: ${themeGet('color.1', '#ffffff')};
  box-shadow: 0 3px 6px ${themeGet('boxShadow.1', 'rgba(26, 68, 116, 0.16)')};
  overflow: hidden;
  @media (max-width: 767px) {
    box-shadow: none;
    margin-bottom: 0;
  }

  .ant-menu {
    padding: 27px 0 20px;
    border: 0;
    @media (max-width: 767px) {
      display: flex;
      flex-wrap: nowrap;
      overflow-y: auto;
      padding: 20px 0 30px;
    }
    li {
      margin: 22px 0;
      height: 26px;
      line-height: 26px;
      padding: 0 30px !important;
      @media (min-width: 1441px) {
        padding: 0 60px !important;
      }
      @media (max-width: 767px) {
        width: auto;
        height: inherit;
        line-height: initial;
        padding: 0 15px !important;
        margin: 0 !important;
        flex-shrink: 0;
        &:first-child {
          padding-left: 0 !important;
        }
      }
      &.ant-menu-item-selected {
        background-color: transparent;
        border-left: 3px solid ${themeGet('primary.0', '#008489')};
        a {
          color: ${themeGet('primary.0', '#008489')};
          font-weight: 700;
        }
      }
      a {
        color: ${themeGet('text.0', '#2C2C2C')};
        font-size: 15px;
        transition: 0.3s ease;
        &:hover {
          color: ${themeGet('primary.0', '#008489')};
        }
      }
    }
  }
`;

export const SidebarMenuWrapper = styled.div`
  overflow: hidden;
  @media (max-width: 767px) {
    height: 67px;
    margin-bottom: 8px;
  }
`;

export const AgentAvatar = styled.div`
  background-color: ${themeGet('color.2', '#F7F7F7')};
  padding: 45px 30px 30px;
  @media (min-width: 1441px) {
    padding: 60px 60px 30px;
  }
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    padding: 32px 30px;
  }
  .ant-avatar {
    width: 90px;
    height: 90px;
    margin-bottom: 25px;
    @media (max-width: 767px) {
      width: 80px;
      height: 80px;
      margin-bottom: 0;
      margin-right: 20px;
      flex-shrink: 0;
    }
    @media (max-width: 320px) {
      width: 65px;
      height: 65px;
    }
  }
  a {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 13px;
    line-height: 16px;
    &:hover,
    &:focus {
      outline: 0;
      box-shadow: none;
      text-decoration: none;
    }
  }
`;

export const ContentWrapper = styled.div``;

export const AgentName = styled.h3`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 17px;
  line-height: 21px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const FromWrapper = styled.div`
  padding: 30px;
  border-radius: 6px;
  border: 1px solid ${themeGet('border.3', '#E6E6E6')};
  background-color: ${themeGet('color.1', '#ffffff')};
  overflow: hidden;
  @media (min-width: 1441px) {
    padding: 60px;
  }
  @media (max-width: 767px) {
    padding: 0;
    border-radius: 0;
    border: 0;

    form {
      padding-bottom: 50px;
    }
  }

  .field-container {
    .ant-form-item {
      .ant-form-item-label {
        margin-bottom: 6px;
        label {
          color: ${themeGet('text.0', '#2C2C2C')};
          font-size: 15px;
          line-height: 18px;
          font-weight: 700;
        }
      }

      .ant-form-item-control {
        line-height: 1;
        input {
          border-radius: 3px;
          border-color: ${themeGet('border.3', '#E6E6E6')};
          height: 47px;
          &:focus {
            outline: 0;
            box-shadow: none;
          }
        }
        textarea {
          border-radius: 3px;
          border-color: ${themeGet('border.3', '#E6E6E6')};
          &:focus {
            outline: 0;
            box-shadow: none;
          }
        }
        &.has-success {
          .ant-form-item-children-icon {
            color: ${themeGet('primary.0', '#008489')};
          }
        }
        .ant-calendar-picker,
        .ant-form-item-children {
          display: block;
        }
        .ant-select {
          .ant-select-selection--single {
            border-radius: 3px;
            border-color: ${themeGet('border.3', '#E6E6E6')};
            height: 47px;
            .ant-select-selection__rendered {
              line-height: 46px;
            }
            &:focus {
              outline: 0;
              box-shadow: none;
            }
          }
        }
        &.has-success.has-feedback {
          .ant-select .ant-select-selection--single,
          .ant-calendar-picker input {
            background-color: ${themeGet('color.2', '#F7F7F7')};
          }
        }
      }
    }
  }

  .submit-container {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 45px;
    @media (max-width: 767px) {
      width: 100%;
      margin-top: 30px;
      padding: 22px 30px;
      flex-direction: row;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 1;
      background-color: ${themeGet('color.1', '#ffffff')};
      border-top: 1px solid ${themeGet('border.3', '#E6E6E6')};
    }
    > button[type='submit'] {
      border-radius: 3px;
      height: 47px;
      border-color: ${themeGet('primary.0', '#008489')};
      background-color: ${themeGet('primary.0', '#008489')};
      font-size: 15px;
      font-weight: 700;
      text-transform: capitalize;
      padding-left: 28px;
      padding-right: 28px;
      line-height: 1;
      &::after {
        content: none;
      }
    }
  }
`;

export const FormTextSwitch = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
  margin-left: 10px;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

export const TextSwitch = styled.div`
  display: flex;
`;

export const SpaceButton = styled.div`
  margin-left: 5px;
`;


export const SpaceSwitch = styled.div`
  margin-top: 30px;
`;

export const FormTitle = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  @media (max-width: 1200px) {
    font-size: 22px;
  }
`;

export const FormSmall = styled.h4`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

export const FormSubtitle = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 16px;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 17px;
  @media (min-width: 1441px) {
    margin-bottom: 40px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

export const AgentPictureUploader = styled.div`
  @media (max-width: 767px) {
    padding-bottom: 50px;
  }
  h4 {
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    margin-bottom: 20px;
  }
  .image_uploader {
    display: block;
    overflow: hidden;
    margin-bottom: 30px;
  }
  .ant-upload.ant-upload-drag {
    border-radius: 3px;
    background-color: ${themeGet('color.2', '#F7F7F7')};
    border: 1px solid ${themeGet('border.0', '#EBEBEB')};
    &:not(.ant-upload-disabled):hover {
      border-color: ${themeGet('border.0', '#EBEBEB')};
    }
    .ant-upload.ant-upload-btn {
      padding: 56px 0;
      @media (max-width: 767px) {
        padding: 30px 0;
      }
      .ant-upload-drag-container {
        > div {
          flex-direction: column;
          justify-content: center;
          .ant-upload-text {
            padding: 0;
            margin: 5px 0 0;
            text-decoration: underline;
            background-color: transparent;
            color: ${themeGet('primary.0', '#008489')};
          }
        }
      }
    }
  }
  .ant-upload-list {
    &.ant-upload-list-picture-card {
      margin-top: 20px;
      .ant-upload-list-item {
        padding: 5px;
        border-radius: 3px;
        border-color: ${themeGet('border.3', '#E6E6E6')};
      }
    }
  }
`;

export default AccountSettingWrapper;
