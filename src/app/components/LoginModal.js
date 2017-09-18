import React from 'react';

export default class LoginModal extends React.Component
{
    render() {
        return <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">Войти</div>
                    <div className="modal-body">
                        <div className="form-horizontal" role="form">
                            <div className="form-group">
                                <label htmlFor="inputLogin" className="col-sm-3 control-label">Login</label>
                                <div className="col-sm-9">
                                    <input type="text" name="login" id="inputLogin" placeholder="Login" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPass" className="col-sm-3 control-label">Пароль</label>
                                <div className="col-sm-9">
                                    <input type="password" name="password" id="inputPass" placeholder="Пароль" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                    <button type="button" className="btn btn-default" data-dismiss="modal" aria-hidden="true">Закрыть</button>
                                    <button type="button" className="btn btn-success">Отправить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}