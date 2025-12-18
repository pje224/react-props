import { useState } from "react";
import "./ModalEx.css";
import { Modal } from "./Modal";

export function ModalEx() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // 기본 모달
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 확인 모달
  const openConfirmModal = () => setConfirmModalOpen(true);
  const closeConfirmModal = () => setConfirmModalOpen(false);
  const handleConfirm = () => {
    alert("확인 되었습니다.");
    closeConfirmModal();
  };

  // 폼 모달
  const openFormModal = () => setFormModalOpen(true);
  const closeFormModal = () => setFormModalOpen(false);
  // 폼 제출
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`폼 제출 완료! \n이름 : ${formData.name} \n이메일 : ${formData.email} \n메시지 : ${formData.message} `);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    closeFormModal();
  };
  const handelFormChange = (e) => {
    const { name, value } = e.target;
    // e.target.name : 이벤트 발생한 요소의 name 속성을 가리킴
    // e.target.value : 이벤트가 발생한 요소의 value 속성을 가리킴
    setFormData((prev) => ({
      ...prev, // 이전 상태를 유지하면서 새로운 상태를 추가
      [name]: value, // 새로운 상태를 추가
    }));
  };

  return (
    <div className="modal-example">
      <h1>모달 컴포넌트 사용 예제</h1>
      <div className="button-group">
        <button className="btn btn-primary" onClick={openModal}>
          기본 모달열기
        </button>
        <button className="btn btn-warning" onClick={openConfirmModal}>
          확인 모달열기
        </button>
        <button className="btn btn-success" onClick={openFormModal}>
          폼 모달열기
        </button>
      </div>
      {/* 기본 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="기본 모달"
        children={
          <div className="modal-content-example">
            <p>이 페이지는 기본 모달창입니다.</p>
            <p>모달 외부를 클릭하거나 X 버튼을 클릭하여 닫을 수 있습니다.</p>
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={closeModal}>
                닫기
              </button>
            </div>
          </div>
        }
      />
      {/* 확인 모달 */}
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={closeConfirmModal}
        title="확인 모달"
        children={
          <div className="modal-content-example">
            <p>정말로 이 작업을 진행하시겠습니까?</p>
            <p>이 작업은 되돌릴 수 없습니다.</p>
            <div className="modal-actions">
              <button className="btn btn-danger" onClick={handleConfirm}>
                확인
              </button>
              <button className="btn btn-secondary" onClick={closeConfirmModal}>
                취소
              </button>
            </div>
          </div>
        }
      />
      {/* 폼 모달 */}
      <Modal
        isOpen={isFormModalOpen}
        onClose={closeFormModal}
        title="폼 모달"
        children={
          <>
            <form onSubmit={handleFormSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="name">이름:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handelFormChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">이메일:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handelFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">메시지:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handelFormChange}
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn btn-success">
                  제출
                </button>
                <button type="button" className="btn btn-secondary" onClick={closeFormModal}>
                  취소
                </button>
              </div>
            </form>
          </>
        }
      />
    </div>
  );
}
