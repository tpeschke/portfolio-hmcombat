import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import { connect } from 'react-redux'
import { WEAPONMODAL2, SELECTWEAPON } from '../../../ducks/reducer'

class ActWeapon extends Component {

    select = (weapon) => {
        this.props.SELECTWEAPON(weapon, this.props.id)
        this.props.WEAPONMODAL2()
    }

    render() {
        let { weapons, id, open, WEAPONMODAL2 } = this.props

        let display = weapons.map((val, i) => {
            return (
                <div key={val.id + i} class={val.selected == 1 ? 'wpItem wpSelected' : 'wpItem'}
                    onClick={_=>this.select(val.id)}>
                    <p>{val.weapon}</p>
                    <p className="wpSpeed">{val.speed}</p>
                </div>
            )
        })

        return (
            <div>
                <Modal open={open} onClose={WEAPONMODAL2} little
                    classNames={{ modal: 'modalBaseToP' }}>
                    <div className="modalWeaponOuter">
                        <div className="modalWeaponInner">
                            <h2 className="wpHeader">Weapon Picker</h2>
                            <div className="border modalBorder wpHeader"></div>
                            <div className='wpItemTable'>
                                <div className='wpTableHeader'>
                                    <p>Weapon</p>
                                    <p className="wpSpeed">Speed</p>
                                </div>
                                {display}
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        open: state.weaponModal2
    }
}
export default connect(mapStateToProps, { WEAPONMODAL2, SELECTWEAPON })(ActWeapon)